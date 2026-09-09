import React, { useEffect } from "react";
import { ArrowDown, ArrowRight, FileCheck2, ShieldCheck } from "lucide-react";
import { proofFacts } from "../data/siteData";
import { OrderForm } from "./OrderForm";

export function AboutPage({ onRequest }) {
  useEffect(() => {
    document.title = "О компании РусХимСоюз — поставщик фреона";
  }, []);

  return (
    <main className="about-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <span>О компании</span>
          </nav>

          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">О компании РусХимСоюз</h1>
              <p className="inner-hero__offer">
                Поставщик фреонов для <strong>закупок по России</strong>
              </p>
              <p className="inner-hero__description">
                Поставляем хладагенты сервисным компаниям, закупщикам, участникам
                тендеров и региональным партнерам.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="#about-company">
                  О компании <ArrowDown aria-hidden="true" />
                </a>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Получить условия поставки" })}
                >
                  Получить условия поставки
                </button>
              </div>
            </div>

            <div className="inner-hero__index" aria-hidden="true">
              <span>4</span>
              <strong>года</strong>
              <p>поставляем фреоны и хладагенты для климатической техники</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats section section--dark">
        <div className="container">
          <div className="section-heading section-heading--light">
            <h2 className="section-heading__title">
              Поставляем фреон для регулярных и крупных закупок
            </h2>
            <p className="section-heading__description">
              Работаем с сервисными компаниями, закупщиками, участниками тендеров и
              региональными партнерами.
            </p>
          </div>

          <div className="about-stats__grid">
            {proofFacts.map((fact, index) => (
              <article className="about-stats__item" key={fact.label}>
                <span className="about-stats__number">0{index + 1}</span>
                <strong>{fact.value}</strong>
                <p>{fact.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-content section" id="about-company">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>РХС</span>
            <p>Оптовые поставки хладагентов</p>
          </aside>

          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Оптовые поставки хладагентов</h2>
              <p>
                ООО «РусХимСоюз» поставляет фреоны и хладагенты для климатической
                техники. В ассортименте представлены R22, R134a, R404A, R410A, R507 и
                другие хладагенты.
              </p>
              <p>
                Опыт оптовых поставок, ассортимент, контроль качества и организация
                отгрузки позволяют работать с регулярными и крупными заказами.
              </p>
              <a className="text-link" href="/products">
                Перейти в каталог <ArrowRight aria-hidden="true" />
              </a>
            </article>

            <article className="product-content__article">
              <h2>Документы на товар по запросу</h2>
              <p>
                Предоставим государственную таможенную декларацию и сертификат
                соответствия на выбранный товар. Сообщите менеджеру, какие документы
                нужны для закупки.
              </p>
              <div className="product-content__notice">
                <FileCheck2 aria-hidden="true" />
                <p>Документы можно запросить вместе с расчетом стоимости заказа.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="product-content section section--frost" id="quality-guarantee">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>01</span>
            <p>Контроль качества и гарантии</p>
          </aside>

          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Контроль качества и гарантии</h2>
              <p>
                Фреон, продаваемый нашей компанией, проходит строгий контроль качества
                и имеет необходимые документы.
              </p>
              <p>
                Если качество товара не устроит покупателя, он может обратиться к
                менеджерам для оформления возврата денег.
              </p>
              <div className="product-content__notice">
                <ShieldCheck aria-hidden="true" />
                <p>Условия возврата и комплект документов уточняются до оформления заказа.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Оптовая поставка</p>
            <h2 className="request-section__title">Получите условия поставки</h2>
            <p className="request-section__description">
              Укажите марку и количество фреона. Менеджер сообщит актуальную цену,
              рассчитает доставку и подготовит документы.
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
