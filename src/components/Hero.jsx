import React from "react";
import refrigerant404 from "../../assets/404/404 Sanmei.jpg";

export function Hero({ onRequest }) {
  return (
    <section className="hero">
      <div className="hero__grid container">
        <div className="hero__content">
          <h1 className="hero__title">Купить фреон в Москве оптом и в розницу</h1>
          <p className="hero__offer-line">
            Счет за 5–10 минут, отгрузка <strong>через час после оплаты</strong>
          </p>
          <p className="hero__lead">
            R404A, R507, R134a и другие марки. Цены указаны от 1 баллона,
            для оптовых позиций — от 10 и 50 баллонов.
          </p>
          <div className="hero__actions">
            <button className="button button--primary" type="button" onClick={onRequest}>
              Получить цену и оформить заказ
            </button>
            <a className="button button--text" href="#catalog">
              Открыть каталог <span aria-hidden="true">↓</span>
            </a>
          </div>
          <dl className="hero__facts" aria-label="Условия поставки">
            <div className="hero__fact">
              <dt>Документы</dt>
              <dd>ГТД и сертификат по запросу</dd>
            </div>
            <div className="hero__fact">
              <dt>Доставка</dt>
              <dd>Москва и регионы России</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-label="Фреон R404A в баллоне">
          <div className="hero__visual-grid" aria-hidden="true" />
          <span className="hero__visual-code" aria-hidden="true">R404A</span>
          <figure className="hero__image-frame">
            <img
              className="hero__image"
              src={refrigerant404}
              alt="Оранжевый баллон фреона R404A Sanmei"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
