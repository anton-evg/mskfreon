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

const product = products.find((item) => item.code === "R22");

const faqItems = [
  [
    "Где применяется фреон R22?",
    "R22 применяют в холодильных установках с поршневыми и винтовыми компрессорами, промышленных и бытовых кондиционерах, а также в бытовых холодильных машинах.",
  ],
  [
    "Можно ли использовать R22 вместо R12?",
    "Нет. R22 имеет более высокое давление в области высоких температур и не является эквивалентной заменой R12.",
  ],
  [
    "Какие хладагенты могут заменить R22?",
    "В качестве вариантов замены указываются R404A, R407C, R410A и R507. Конкретный хладагент выбирает специалист с учетом оборудования и масла.",
  ],
  [
    "В какой таре поставляется R22?",
    "Фреон R22 поставляется в баллонах по 13,6 кг.",
  ],
  [
    "Какие документы можно получить?",
    "По запросу предоставим ГТД и сертификат соответствия на выбранный фреон.",
  ],
];

export function Freon22Page({ onRequest }) {
  useEffect(() => {
    document.title = "Купить фреон R22 оптом — РусХимСоюз";
  }, []);

  const request = (title) => onRequest({ title, refrigerant: "R22" });

  return (
    <main className="product-page" id="top">
      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <a href="/products">Каталог</a>
            <span aria-hidden="true">/</span>
            <span>Фреон R22</span>
          </nav>

          <div className="product-hero__grid">
            <div className="product-hero__content">
              <p className="product-hero__code">R22 · ХЛАДАГЕНТ</p>
              <h1 className="product-hero__title">Купить фреон R22 оптом</h1>
              <p className="product-hero__offer">
                Для <strong>холодильных установок и систем кондиционирования</strong>
              </p>
              <p className="product-hero__description">
                Фреон R22 в баллонах 13,6 кг. Покажем цену от объема, подтвердим
                наличие и рассчитаем доставку.
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
                  onClick={() => request("Запросить документы на фреон R22")}
                >
                  Запросить документы
                </button>
              </div>
            </div>

            <div className="product-hero__visual">
              <div className="product-hero__image-wrap">
                <img src={product.image} alt="Баллон фреона R22" />
              </div>
              <dl className="product-hero__details">
                <div>
                  <dt>Тара</dt>
                  <dd>Баллон 13,6 кг</dd>
                </div>
                <div>
                  <dt>Назначение</dt>
                  <dd>Холодильные установки и кондиционеры</dd>
                </div>
                <div>
                  <dt>Состав</dt>
                  <dd>Дифторхлорметан</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="product-tiers section section--dark">
        <div className="container">
          <div className="section-heading section-heading--light">
            <h2 className="section-heading__title">
              Цена R22 зависит от количества баллонов
            </h2>
            <p className="section-heading__description">
              Подготовим расчет для заказа от 1, 5, 20 и 100 баллонов. Для крупных
              закупок предложим индивидуальные условия.
            </p>
          </div>
          <div className="product-tiers__grid">
            {["1", "5", "20", "100"].map((quantity, index) => (
              <article className="product-tiers__item" key={quantity}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{quantity}</strong>
                <p>баллон{quantity === "1" ? "" : "ов"}</p>
                <em>Цена по запросу</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LegacyProductDescription code="R22" />

      <section className="product-service section section--frost">
        <div className="container product-service__grid">
          <article className="product-service__item">
            <FileCheck2 aria-hidden="true" />
            <h2>Документы по запросу</h2>
            <p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => request("Запросить документы на фреон R22")}
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
            <h2 className="section-heading__title">Вопросы о фреоне R22</h2>
          </div>
          <Accordion.Root
            className="faq__accordion"
            type="single"
            collapsible
            defaultValue="r22-0"
          >
            {faqItems.map(([question, answer], index) => (
              <Accordion.Item
                className="faq__item"
                value={`r22-${index}`}
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
            <p className="request-section__caption">Заявка на R22</p>
            <h2 className="request-section__title">Получите цену и расчет доставки</h2>
            <p className="request-section__description">
              Укажите количество баллонов R22. Менеджер подтвердит наличие, цену и
              условия получения.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm initialRefrigerant="R22" />
          </div>
        </div>
      </section>
    </main>
  );
}
