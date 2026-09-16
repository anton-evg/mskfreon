import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ChevronDown, FileCheck2, Truck } from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";
import { LegacyProductDescription } from "./LegacyProductDescription";
import { ProductPriceSection } from "./ProductPriceSection";

const product = products.find((item) => item.code === "R507");

const faqItems = [
  {
    question: "Где применяется фреон R507?",
    answer:
      "R507 используют в средне- и низкотемпературном оборудовании: холодильных камерах и складах, витринах, ледогенераторах, торговом и промышленном холоде.",
  },
  {
    question: "Для каких систем подходит R507?",
    answer:
      "R507 разработан для ретрофита низкотемпературных систем на R502 и для заправки нового оборудования с полиэфирными маслами. Совместимость оборудования подтверждает специалист.",
  },
  {
    question: "Почему R507 удобно дозаправлять?",
    answer:
      "R507 — азеотропная смесь, которая ведет себя как однокомпонентная жидкость. При заправке не возникает проблем, связанных с разделением компонентов смеси.",
  },
  {
    question: "В какой таре поставляется R507?",
    answer: "Фреон R507 поставляется в баллонах по 11,3 кг. Актуальное наличие подтвердит менеджер.",
  },
  {
    question: "Как получить заказ?",
    answer:
      "Возможна доставка по Москве и области, отправка транспортной компанией в регионы России или самовывоз после поступления оплаты.",
  },
];

export function Freon507Page({ onRequest }) {
  useEffect(() => {
    document.title = "Купить фреон R507 в Москве оптом и в розницу — РусХимСоюз";
  }, []);

  return (
    <main className="product-page" id="top">
      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <a href="/products">Каталог</a>
            <span aria-hidden="true">/</span>
            <span>Фреон R507</span>
          </nav>

          <div className="product-hero__grid">
            <div className="product-hero__content">
              <p className="product-hero__code">R507 · ХЛАДАГЕНТ</p>
              <h1 className="product-hero__title">Купить фреон R507 в Москве оптом и в розницу</h1>
              <p className="product-hero__offer">
                Для холодильных систем <strong>низких температур</strong>
              </p>
              <p className="product-hero__description">
                Фреон R507 в баллонах 11,3 кг. Покажем цену от объема, подтвердим наличие и
                рассчитаем доставку.
              </p>
              <div className="product-hero__actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => onRequest({ title: "Получить цену и оформить заказ", refrigerant: "R507" })}
                >
                  Получить цену и оформить заказ
                </button>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Запросить документы на фреон R507", refrigerant: "R507" })}
                >
                  Запросить документы
                </button>
              </div>
            </div>

            <div className="product-hero__visual">
              <div className="product-hero__image-wrap">
                <img src={product.image} alt="Фреон R507 в баллоне Sanmei" />
              </div>
              <dl className="product-hero__details">
                <div>
                  <dt>Тара</dt>
                  <dd>Баллон 11,3 кг</dd>
                </div>
                <div>
                  <dt>Назначение</dt>
                  <dd>Средние и низкие температуры</dd>
                </div>
                <div>
                  <dt>Вариант</dt>
                  <dd>Sanmei</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ProductPriceSection code="R507" />

      <LegacyProductDescription code="R507" />

      <section className="product-service section section--frost">
        <div className="container product-service__grid">
          <article className="product-service__item">
            <FileCheck2 aria-hidden="true" />
            <h2>Документы по запросу</h2>
            <p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => onRequest({ title: "Запросить документы на фреон R507", refrigerant: "R507" })}
            >
              Запросить документы <ArrowRight aria-hidden="true" />
            </button>
          </article>
          <article className="product-service__item">
            <Truck aria-hidden="true" />
            <h2>Доставка или самовывоз</h2>
            <p>
              Доставляем по Москве и области, отправляем транспортной компанией в регионы.
              Самовывоз возможен после поступления оплаты.
            </p>
            <a className="text-link" href="/delivery">
              Подробнее о доставке <ArrowRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq__layout">
          <div className="section-heading">
            <h2 className="section-heading__title">Вопросы о фреоне R507</h2>
          </div>
          <Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="r507-0">
            {faqItems.map((item, index) => (
              <Accordion.Item className="faq__item" value={`r507-${index}`} key={item.question}>
                <Accordion.Header className="faq__header">
                  <Accordion.Trigger className="faq__trigger">
                    <span>{item.question}</span>
                    <ChevronDown className="faq__chevron" aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="faq__content">
                  <p>{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Заявка на R507</p>
            <h2 className="request-section__title">Получите цену и расчет доставки</h2>
            <p className="request-section__description">
              Оставьте удобный контакт. Менеджер уточнит количество R507, подтвердит наличие, цену и условия
              получения.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm initialRefrigerant="R507" />
          </div>
        </div>
      </section>
    </main>
  );
}
