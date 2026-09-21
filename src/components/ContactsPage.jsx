import React, { useEffect } from "react";
import { ArrowDown, ArrowRight, Building2, MapPin, Phone } from "lucide-react";
import { OrderForm } from "./OrderForm";

const companyDetails = [
  ["Компания", "ООО «РусХимСоюз»"],
  ["ИНН", "9718276227"],
  ["КПП", "771801001"],
  ["ОГРН", "1257700053181"],
];

export function ContactsPage({ onRequest }) {
  useEffect(() => {
    document.title = "Контакты РусХимСоюз";
  }, []);

  return (
    <main className="contacts-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a><span aria-hidden="true">/</span><span>Контакты</span>
          </nav>
          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">Контакты РусХимСоюз</h1>
              <p className="inner-hero__offer">Уточните условия заказа <strong>у менеджера</strong></p>
              <p className="inner-hero__description">
                Сообщите марку, количество баллонов и город получения. Менеджер
                рассчитает стоимость товара и доставки.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="tel:+79362198199">
                  +7 936 219-81-99 <Phone aria-hidden="true" />
                </a>
                <a className="button button--outline" href="#company-details">
                  Реквизиты <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="inner-hero__index" aria-hidden="true">
              <span>01</span><strong>телефон</strong>
              <p>для вопросов по цене, заказу, документам и доставке</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-options section section--frost">
        <div className="container contact-options__grid">
          <article className="contact-options__item">
            <Phone aria-hidden="true" />
            <span>Телефон</span>
            <a href="tel:+79362198199">+7 936 219-81-99</a>
            <p>Цена, наличие, документы и оформление заказа.</p>
          </article>
          <article className="contact-options__item">
            <MapPin aria-hidden="true" />
            <span>Адрес компании</span>
            <strong>Москва, Коровинское шоссе, 35, стр. 1</strong>
            <p>Точка самовывоза согласовывается с менеджером после оплаты.</p>
          </article>
          <article className="contact-options__item">
            <Building2 aria-hidden="true" />
            <span>Доставка</span>
            <strong>Москва и регионы России</strong>
            <a className="text-link" href="/delivery">Условия доставки <ArrowRight aria-hidden="true" /></a>
          </article>
        </div>
      </section>

      <section className="product-content section" id="company-details">
        <div className="container product-content__grid">
          <aside className="product-content__aside"><span>ООО</span><p>Реквизиты компании</p></aside>
          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Реквизиты компании</h2>
              <dl className="payment-requisites">
                {companyDetails.map(([label, value]) => (
                  <div className="payment-requisites__item" key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
            </article>
            <article className="product-content__article">
              <h2>Адрес компании</h2>
              <p>Москва, Коровинское шоссе, 35, стр. 1</p>
              <div className="contact-map">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=39569264925"
                  width="560"
                  height="400"
                  title="РусХимСоюз на Яндекс Картах"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Связаться с менеджером</p>
            <h2 className="request-section__title">Получите ответ по заказу</h2>
            <p className="request-section__description">
              Оставьте удобный контакт. Менеджер уточнит детали и рассчитает заказ с доставкой.
            </p>
          </div>
          <div className="request-section__form-wrap"><OrderForm /></div>
        </div>
      </section>
    </main>
  );
}
