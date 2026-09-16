import React, { useEffect, useId, useState } from "react";
import { AlertCircle, Check } from "lucide-react";

const initialFormState = {
  refrigerant: "",
  name: "",
  contactMethod: "phone",
  contact: "",
  comment: "",
};

const phonePattern = "\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}";
const contactMethods = {
  phone: {
    label: "Телефон",
    fieldLabel: "Телефон",
    type: "tel",
    inputMode: "tel",
    autoComplete: "tel",
    placeholder: "+7 (999) 000-00-00",
    pattern: phonePattern,
    title: "Введите телефон в формате +7 (999) 000-00-00",
    maxLength: 18,
    successText: "по указанному телефону",
  },
  telegram: {
    label: "Telegram",
    fieldLabel: "Никнейм в Telegram",
    type: "text",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "@username",
    maxLength: 100,
    successText: "в Telegram",
  },
  max: {
    label: "Max",
    fieldLabel: "Никнейм в Max",
    type: "text",
    inputMode: "text",
    autoComplete: "off",
    placeholder: "Никнейм или ссылка",
    maxLength: 100,
    successText: "в Max",
  },
};
const allowedPhoneControlKeys = new Set([
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "Tab",
]);

function handlePhoneKeyDown(event) {
  const isKeyboardShortcut = event.ctrlKey || event.metaKey;
  const isDigit = /^\d$/.test(event.key);

  if (isKeyboardShortcut || isDigit || allowedPhoneControlKeys.has(event.key)) {
    return;
  }

  event.preventDefault();
}

function formatRussianPhone(value) {
  const digits = value.replace(/\D/g, "");

  if (digits === "") {
    return "";
  }

  let normalizedDigits = digits;

  if (normalizedDigits.startsWith("8")) {
    normalizedDigits = `7${normalizedDigits.slice(1)}`;
  } else if (!normalizedDigits.startsWith("7")) {
    normalizedDigits = `7${normalizedDigits}`;
  }

  const phoneDigits = normalizedDigits.slice(1, 11);
  let formattedPhone = "+7";

  if (phoneDigits.length > 0) {
    formattedPhone += ` (${phoneDigits.slice(0, 3)}`;
  }

  if (phoneDigits.length >= 3) {
    formattedPhone += ")";
  }

  if (phoneDigits.length > 3) {
    formattedPhone += ` ${phoneDigits.slice(3, 6)}`;
  }

  if (phoneDigits.length > 6) {
    formattedPhone += `-${phoneDigits.slice(6, 8)}`;
  }

  if (phoneDigits.length > 8) {
    formattedPhone += `-${phoneDigits.slice(8, 10)}`;
  }

  return formattedPhone;
}

export function OrderForm({ initialRefrigerant = "", compact = false }) {
  const formId = useId();
  const [formState, setFormState] = useState({ ...initialFormState, refrigerant: initialRefrigerant });
  const [status, setStatus] = useState("idle");
  const activeContactMethod = contactMethods[formState.contactMethod];

  useEffect(() => {
    setFormState((currentState) => ({ ...currentState, refrigerant: initialRefrigerant }));
  }, [initialRefrigerant]);

  const updateField = (field, value) => {
    setFormState((currentState) => ({ ...currentState, [field]: value }));
  };

  const selectContactMethod = (contactMethod) => {
    setFormState((currentState) => ({
      ...currentState,
      contactMethod,
      contact: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus("loading");

    const requestData = new FormData(formElement);
    requestData.set("page", window.location.href);

    try {
      const response = await fetch(formElement.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: requestData,
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message || "Не удалось отправить заявку.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="order-form__message order-form__message--success" role="status">
        <Check aria-hidden="true" />
        <strong>Заявка отправлена.</strong>
        <p>Менеджер свяжется с вами {activeContactMethod.successText}.</p>
        <button className="button button--outline" type="button" onClick={() => setStatus("idle")}>
          Отправить еще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      className={`order-form${compact ? " order-form--compact" : ""}`}
      action="/send-telegramm.php"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="field field--honeypot" aria-hidden="true">
        <span>Сайт</span>
        <input name="website" type="text" tabIndex="-1" autoComplete="off" />
      </label>
      <input name="refrigerant" type="hidden" value={formState.refrigerant} />
      <div className="order-form__grid">
        <fieldset className="contact-methods field--wide">
          <legend className="field__label">Как с вами связаться</legend>
          <div className="contact-methods__options">
            {Object.entries(contactMethods).map(([method, settings]) => (
              <label className="contact-methods__option" key={method}>
                <input
                  type="radio"
                  name="contact_method"
                  value={method}
                  checked={formState.contactMethod === method}
                  onChange={() => selectContactMethod(method)}
                />
                <span>{settings.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="field" htmlFor={`${formId}-name`}>
          <span className="field__label">Имя <small>(необязательно)</small></span>
          <input
            className="field__control"
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
        </label>

        <label className="field" htmlFor={`${formId}-contact`}>
          <span className="field__label">{activeContactMethod.fieldLabel}</span>
          <input
            className="field__control"
            id={`${formId}-contact`}
            name="contact"
            type={activeContactMethod.type}
            autoComplete={activeContactMethod.autoComplete}
            inputMode={activeContactMethod.inputMode}
            placeholder={activeContactMethod.placeholder}
            pattern={activeContactMethod.pattern}
            title={activeContactMethod.title}
            maxLength={activeContactMethod.maxLength}
            value={formState.contact}
            onKeyDown={formState.contactMethod === "phone" ? handlePhoneKeyDown : undefined}
            onChange={(event) => {
              const value = formState.contactMethod === "phone"
                ? formatRussianPhone(event.target.value)
                : event.target.value;
              updateField("contact", value);
            }}
            required
          />
        </label>

        <label className="field field--wide" htmlFor={`${formId}-comment`}>
          <span className="field__label">Комментарий к заказу <small>(необязательно)</small></span>
          <textarea
            className="field__control field__control--textarea"
            id={`${formId}-comment`}
            name="comment"
            placeholder="Производитель, способ получения или другие детали"
            value={formState.comment}
            onChange={(event) => updateField("comment", event.target.value)}
          />
        </label>
      </div>

      <label className="order-form__consent">
        <input type="checkbox" required />
        <span>
          Даю согласие на <a href="/personal-data-consent">обработку персональных данных</a> и ознакомлен с
          {" "}<a href="/privacy-policy">Политикой конфиденциальности</a>.
        </span>
      </label>

      {status === "error" && (
        <div className="order-form__error" role="alert">
          <AlertCircle aria-hidden="true" />
          <span>Не удалось отправить заявку. Позвоните: <a href="tel:+79362198199">+7 936 219-81-99</a>.</span>
        </div>
      )}

      <button className="button button--primary order-form__submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем заявку…" : "Отправить заявку"}
      </button>
    </form>
  );
}
