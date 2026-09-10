import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  ChevronDown,
  FileCheck2,
  Truck,
} from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";
import { LegacyProductDescription } from "./LegacyProductDescription";
import { ProductPriceSection } from "./ProductPriceSection";

const product = products.find((item) => item.code === "R600");

const faqItems = [
  [
    "Где применяется фреон R600a?",
    "R600a применяют в бытовом холодильном оборудовании и кондиционерах. Использование в автомобильных системах ограничено из-за пожароопасности.",
  ],
  [
    "В чем особенность R600a?",
    "Изобутан хорошо растворяется в минеральных маслах, работает при низком давлении и позволяет уменьшить массу хладагента в системе примерно на 30%.",
  ],
  [
    "В какой таре поставляется R600a?",
    "Фреон R600a поставляется в баллонах по 6,5 кг.",
  ],
  [
    "Опасен ли фреон R600a?",
    "R600a легко воспламеняется и образует взрывоопасную смесь с воздухом при объемной доле 1,3–8,5%. Заправку выполняют только подготовленные специалисты.",
  ],
  [
    "Какие документы можно получить?",
    "По запросу предоставим ГТД и сертификат соответствия на выбранный фреон.",
  ],
];

export function Freon600Page({ onRequest }) {
  useEffect(() => {
    document.title = "Купить фреон R600a в Москве оптом и в розницу — РусХимСоюз";
  }, []);

  const request = (title) => onRequest({ title, refrigerant: "R600" });

  return (
    <main className="product-page" id="top">
      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <a href="/products">Каталог</a>
            <span aria-hidden="true">/</span>
            <span>Фреон R600a</span>
          </nav>

          <div className="product-hero__grid">
            <div className="product-hero__content">
              <p className="product-hero__code">R600A · ХЛАДАГЕНТ</p>
              <h1 className="product-hero__title">Купить фреон R600a в Москве оптом и в розницу</h1>
              <p className="product-hero__offer">
                Для <strong>бытового холодильного оборудования</strong>
              </p>
              <p className="product-hero__description">
                Фреон R600a в баллонах 6,5 кг. Покажем цену от объема,
                подтвердим наличие и рассчитаем доставку.
              </p>
              <div className="product-hero__actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => request("Получить цену и оформить заказ")}
                >
                  Получить цену и оформить заказ
                </button>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => request("Запросить документы на фреон R600a")}
                >
                  Запросить документы
                </button>
              </div>
            </div>

            <div className="product-hero__visual">
              <div className="product-hero__image-wrap">
                <img src={product.image} alt="Баллон фреона R600a Refrigerant" />
              </div>
              <dl className="product-hero__details">
                <div>
                  <dt>Тара</dt>
                  <dd>Баллон 6,5 кг</dd>
                </div>
                <div>
                  <dt>Назначение</dt>
                  <dd>Бытовые холодильные системы</dd>
                </div>
                <div>
                  <dt>Состав</dt>
                  <dd>Изобутан C4H10</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ProductPriceSection code="R600" />

      <LegacyProductDescription code="R600" />

      <section className="product-service section section--frost">
        <div className="container product-service__grid">
          <article className="product-service__item">
            <FileCheck2 aria-hidden="true" />
            <h2>Документы по запросу</h2>
            <p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => request("Запросить документы на фреон R600a")}
            >
              Запросить документы <ArrowRight aria-hidden="true" />
            </button>
          </article>

          <article className="product-service__item">
            <Truck aria-hidden="true" />
            <h2>Доставка или самовывоз</h2>
            <p>
              Доставляем по Москве и области, отправляем транспортной компанией в
              регионы. Самовывоз возможен после поступления оплаты.
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
            <h2 className="section-heading__title">Вопросы о фреоне R600a</h2>
          </div>
          <Accordion.Root
            className="faq__accordion"
            type="single"
            collapsible
            defaultValue="r600-0"
          >
            {faqItems.map(([question, answer], index) => (
              <Accordion.Item
                className="faq__item"
                value={`r600-${index}`}
                key={question}
              >
                <Accordion.Header className="faq__header">
                  <Accordion.Trigger className="faq__trigger">
                    <span>{question}</span>
                    <ChevronDown className="faq__chevron" aria-hidden="true" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="faq__content">
                  <p>{answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Заявка на R600a</p>
            <h2 className="request-section__title">Получите цену и расчет доставки</h2>
            <p className="request-section__description">
              Укажите количество баллонов R600a. Менеджер подтвердит наличие, цену и
              условия получения.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm initialRefrigerant="R600" />
          </div>
        </div>
      </section>
    </main>
  );
}
