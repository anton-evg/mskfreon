import React, { useEffect, useId, useState } from "react";
import { AlertCircle, Check } from "lucide-react";
import { products } from "../data/siteData";

const initialFormState = {
  refrigerant: "",
  quantity: "",
  name: "",
  phone: "",
  comment: "",
};

const phonePattern = "\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}";

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

  useEffect(() => {
    setFormState((currentState) => ({ ...currentState, refrigerant: initialRefrigerant }));
  }, [initialRefrigerant]);

  const updateField = (field, value) => {
    setFormState((currentState) => ({ ...currentState, [field]: value }));
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
        <p>Менеджер свяжется с вами по указанному номеру.</p>
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
      <div className="order-form__grid">
        <label className="field" htmlFor={`${formId}-name`}>
          <span className="field__label">Имя</span>
          <input
            className="field__control"
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </label>

        <label className="field" htmlFor={`${formId}-phone`}>
          <span className="field__label">Телефон</span>
          <input
            className="field__control"
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+7 (999) 000-00-00"
            pattern={phonePattern}
            title="Введите телефон в формате +7 (999) 000-00-00"
            maxLength={18}
            value={formState.phone}
            onChange={(event) => updateField("phone", formatRussianPhone(event.target.value))}
            required
          />
        </label>

        <label className="field" htmlFor={`${formId}-refrigerant`}>
          <span className="field__label">Марка фреона</span>
          <select
            className="field__control"
            id={`${formId}-refrigerant`}
            name="refrigerant"
            value={formState.refrigerant}
            onChange={(event) => updateField("refrigerant", event.target.value)}
            required
          >
            <option value="">Выберите марку</option>
            {products.map((product) => (
              <option value={product.code} key={product.code}>{product.name}</option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor={`${formId}-quantity`}>
          <span className="field__label">Количество баллонов</span>
          <input
            className="field__control"
            id={`${formId}-quantity`}
            name="quantity"
            type="number"
            min="1"
            inputMode="numeric"
            placeholder="Например, 20"
            value={formState.quantity}
            onChange={(event) => updateField("quantity", event.target.value)}
            required
          />
        </label>

        <label className="field field--wide" htmlFor={`${formId}-comment`}>
          <span className="field__label">Комментарий к заказу</span>
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
