import React, { useEffect } from "react";
import {
  ArrowDown,
  Calculator,
  FileText,
  Landmark,
  PackageCheck,
} from "lucide-react";
import { OrderForm } from "./OrderForm";

const paymentSteps = [
  {
    icon: Calculator,
    number: "01",
    title: "Получите расчет",
    text: "Сообщите марку фреона, количество баллонов и город получения.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Получите счет",
    text: "Менеджер подготовит счет, обычно за 5–10 минут, и при необходимости оформит договор.",
  },
  {
    icon: Landmark,
    number: "03",
    title: "Оплатите счет",
    text: "Оплата поступает на расчетный счет ООО «РусХимСоюз».",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Получите заказ",
    text: "После поступления средств доступен самовывоз или передача перевозчику.",
  },
];

const requisites = [
  ["Получатель", "ООО «РусХимСоюз»"],
  ["ИНН", "9718276227"],
  ["КПП", "771801001"],
  ["ОГРН", "1257700053181"],
  ["Расчетный счет", "40702810310001866243"],
  ["Банк", "АО «ТБанк»"],
  ["БИК", "044525974"],
];

export function PaymentPage({ onRequest }) {
  useEffect(() => {
    document.title = "Оплата заказа — РусХимСоюз";
  }, []);

  return (
    <main className="payment-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <span>Оплата</span>
          </nav>

          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">Оплата заказа</h1>
              <p className="inner-hero__offer">
                Счет и документы для <strong>оформления поставки</strong>
              </p>
              <p className="inner-hero__description">
                Менеджер подготовит расчет, выставит счет и при необходимости оформит
                договор.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="#payment-steps">
                  Посмотреть порядок оплаты <ArrowDown aria-hidden="true" />
                </a>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Получить счет на оплату" })}
                >
                  Получить счет
                </button>
              </div>
            </div>

            <div className="inner-hero__index" aria-hidden="true">
              <span>4</span>
              <strong>шага</strong>
              <p>от расчета заказа до получения оплаченного товара</p>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-steps section section--frost" id="payment-steps">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Как оплатить и получить заказ</h2>
            <p className="section-heading__description">
              Последовательность построена как пошаговый компонент: на каждом этапе
              понятно, что происходит дальше.
            </p>
          </div>
          <div className="payment-steps__grid">
            {paymentSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="payment-steps__item" key={step.number}>
                  <Icon aria-hidden="true" />
                  <span>{step.number}</span>
                  <h2>{step.title}</h2>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-content section">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>ООО</span>
            <p>Реквизиты для оформления поставки</p>
          </aside>

          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Реквизиты ООО «РусХимСоюз»</h2>
              <dl className="payment-requisites">
                {requisites.map(([label, value]) => (
                  <div className="payment-requisites__item" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Заявка на оплату</p>
            <h2 className="request-section__title">Получите расчет и счет</h2>
            <p className="request-section__description">
              Оставьте удобный контакт. Менеджер уточнит детали и подготовит расчет
              заказа и документы для оплаты.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm />
          </div>
        </div>
      </section>
    </main>
  );
}
