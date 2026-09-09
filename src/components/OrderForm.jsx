import React, { useEffect, useId, useState } from "react";
import { Check } from "lucide-react";
import { products } from "../data/siteData";

const initialFormState = {
  refrigerant: "",
  quantity: "",
  name: "",
  phone: "",
  comment: "",
};

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
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
    <form className={`order-form${compact ? " order-form--compact" : ""}`} onSubmit={handleSubmit}>
      <div className="order-form__grid">
        <label className="field" htmlFor={`${formId}-name`}>
          <span className="field__label">Имя</span>
          <input
            className="field__control"
            id={`${formId}-name`}
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
            type="tel"
            autoComplete="tel"
            placeholder="+7 999 000-00-00"
            value={formState.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            required
          />
        </label>

        <label className="field" htmlFor={`${formId}-refrigerant`}>
          <span className="field__label">Марка фреона</span>
          <select
            className="field__control"
            id={`${formId}-refrigerant`}
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
            placeholder="Производитель, способ получения или другие детали"
            value={formState.comment}
            onChange={(event) => updateField("comment", event.target.value)}
          />
        </label>
      </div>

      <label className="order-form__consent">
        <input type="checkbox" required />
        <span>
          Даю согласие на <a href="/personal-data">обработку персональных данных</a> и ознакомлен с
          {" "}<a href="/privacy-policy">Политикой конфиденциальности</a>.
        </span>
      </label>

      <button className="button button--primary order-form__submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Отправляем заявку…" : "Отправить заявку"}
      </button>
    </form>
  );
}
