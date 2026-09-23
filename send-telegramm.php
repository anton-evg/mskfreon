<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

/** Вставьте токен Telegram-бота и идентификатор чата перед публикацией. */
$token = '';
$chatId = '';

function sendJson(int $statusCode, bool $success, string $message): void
{
    http_response_code($statusCode);
    echo json_encode(
        ['success' => $success, 'message' => $message],
        JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
    );
    exit;
}

function getFormField(string $fieldName, int $maximumLength): string
{
    $rawValue = $_POST[$fieldName] ?? '';

    if (is_array($rawValue)) {
        return '';
    }

    $value = trim((string) $rawValue);
    $value = strip_tags($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maximumLength);
    }

    return substr($value, 0, $maximumLength);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    sendJson(405, false, 'Метод запроса не поддерживается.');
}

/** Honeypot: заполненное скрытое поле означает автоматическую отправку. */
if (getFormField('website', 200) !== '') {
    sendJson(200, true, 'Заявка принята.');
}

if ($token === '' || $chatId === '') {
    error_log('Telegram form handler is not configured.');
    sendJson(500, false, 'Отправка временно недоступна. Позвоните нам по телефону.');
}

$name = getFormField('name', 100);
$contactMethod = getFormField('contact_method', 20);
$contact = getFormField('contact', 100);
$refrigerant = getFormField('refrigerant', 50);
$comment = getFormField('comment', 1000);
$page = getFormField('page', 500);

/** Поддержка формы из ранее закешированной версии сайта. */
if ($contactMethod === '' && $contact === '') {
    $legacyPhone = getFormField('phone', 50);

    if ($legacyPhone !== '') {
        $contactMethod = 'phone';
        $contact = $legacyPhone;
    }
}

$contactMethodLabels = [
    'phone' => 'Телефон',
    'telegram' => 'Telegram',
    'max' => 'Max',
];

if (!array_key_exists($contactMethod, $contactMethodLabels)) {
    sendJson(422, false, 'Выберите способ связи.');
}

if ($contact === '') {
    sendJson(422, false, 'Укажите контакт для связи.');
}

if ($contactMethod === 'phone' && preg_match('/^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$/', $contact) !== 1) {
    sendJson(422, false, 'Введите телефон в формате +7 (999) 000-00-00.');
}

$messageFields = [
    'Новая заявка с сайта' => '',
    'Имя' => $name,
    'Способ связи' => $contactMethodLabels[$contactMethod],
    $contactMethodLabels[$contactMethod] => $contact,
    'Марка фреона' => $refrigerant,
    'Комментарий' => $comment,
    'Страница' => $page,
];

$messageLines = [];

foreach ($messageFields as $label => $value) {
    if ($value === '' && $label !== 'Новая заявка с сайта') {
        continue;
    }

    $escapedLabel = htmlspecialchars($label, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $escapedValue = htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $messageLines[] = $value === '' ? "<b>{$escapedLabel}</b>" : "<b>{$escapedLabel}:</b> {$escapedValue}";
}

$telegramUrl = "https://api.telegram.org/bot{$token}/sendMessage";
$telegramPayload = http_build_query([
    'chat_id' => $chatId,
    'parse_mode' => 'HTML',
    'text' => implode("\n", $messageLines),
]);

$responseBody = false;
$responseCode = 0;

if (function_exists('curl_init')) {
    $curl = curl_init($telegramUrl);
    curl_setopt_array($curl, [
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $telegramPayload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    ]);
    $responseBody = curl_exec($curl);
    $responseCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $telegramPayload,
            'timeout' => 10,
            'ignore_errors' => true,
        ],
    ]);
    $responseBody = @file_get_contents($telegramUrl, false, $context);

    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $matches)) {
        $responseCode = (int) $matches[1];
    }
}

$telegramResponse = is_string($responseBody) ? json_decode($responseBody, true) : null;

if ($responseCode !== 200 || !is_array($telegramResponse) || ($telegramResponse['ok'] ?? false) !== true) {
    error_log("Telegram request failed with HTTP status {$responseCode}.");
    sendJson(502, false, 'Не удалось отправить заявку. Позвоните нам по телефону.');
}

sendJson(200, true, 'Заявка отправлена.');
