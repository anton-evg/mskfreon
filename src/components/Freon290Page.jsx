import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  ChevronDown,
  FileCheck2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";
import { ProductPriceSection } from "./ProductPriceSection";

const product = products.find((item) => item.code === "R290");

const faqItems = [
  [
    "В какой таре поставляется R290?",
    "Фреон R290 поставляется в баллонах по 5 кг.",
  ],
  [
    "Как узнать цену R290?",
    "Цена зависит от количества баллонов. Менеджер подготовит расчет для нужного объема.",
  ],
  [
    "Какие документы можно получить?",
    "По запросу предоставим документы на выбранный товар. Технические характеристики уточняются по паспорту конкретного товара.",
  ],
  [
    "Как получить заказ?",
    "Возможен самовывоз после поступления оплаты или отправка транспортной компанией в регионы России.",
  ],
  [
    "Где посмотреть характеристики R290?",
    "Сферу применения, правила хранения и обращения публикуем после получения паспорта конкретного товара.",
  ],
];

export function Freon290Page({ onRequest }) {
  useEffect(() => {
    document.title = "Купить фреон R290 в Москве оптом и в розницу — РусХимСоюз";
  }, []);

  const request = (title) => onRequest({ title, refrigerant: "R290" });

  return (
    <main className="product-page" id="top">
      <section className="product-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <a href="/products">Каталог</a>
            <span aria-hidden="true">/</span>
            <span>Фреон R290</span>
          </nav>

          <div className="product-hero__grid">
            <div className="product-hero__content">
              <p className="product-hero__code">R290 · ХЛАДАГЕНТ</p>
              <h1 className="product-hero__title">Купить фреон R290 в Москве оптом и в розницу</h1>
              <p className="product-hero__offer">
                Цена, наличие и доставка <strong>в одном запросе</strong>
              </p>
              <p className="product-hero__description">
                Фреон R290 в баллонах 5 кг. Покажем цену от объема, подтвердим
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
                  onClick={() => request("Запросить документы на фреон R290")}
                >
                  Запросить документы
                </button>
              </div>
            </div>

            <div className="product-hero__visual">
              <div className="product-hero__image-wrap">
                <img src={product.image} alt="Баллон фреона R290 Refrigerant" />
              </div>
              <dl className="product-hero__details">
                <div>
                  <dt>Тара</dt>
                  <dd>Баллон 5 кг</dd>
                </div>
                <div>
                  <dt>Применение</dt>
                  <dd>По паспорту оборудования</dd>
                </div>
                <div>
                  <dt>Документы</dt>
                  <dd>Паспорт конкретного товара</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ProductPriceSection code="R290" />

      <section className="product-content section">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>R290</span>
            <p>Поставка и технические документы</p>
          </aside>

          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Поставка фреона R290</h2>
              <p>
                R290 поставляется в баллонах по 5 кг. Укажите в заявке нужное
                количество, город доставки и требования к документам — менеджер
                подготовит актуальный расчет.
              </p>
              <p>
                Цена, наличие и способ получения подтверждаются перед оформлением
                заказа.
              </p>
            </article>

            <article className="product-content__article">
              <h2>Технические характеристики R290</h2>
              <p>
                Технические характеристики, сферу применения, правила хранения и
                обращения публикуем только после получения паспорта конкретного товара.
              </p>
              <div className="product-content__notice">
                <ShieldCheck aria-hidden="true" />
                <p>
                  Перед использованием проверьте паспорт товара и требования
                  оборудования. Работы с хладагентом выполняет подготовленный специалист.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="product-service section section--frost">
        <div className="container product-service__grid">
          <article className="product-service__item">
            <FileCheck2 aria-hidden="true" />
            <h2>Документы по запросу</h2>
            <p>Предоставим документы на выбранный товар и уточним требования к закупке.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => request("Запросить документы на фреон R290")}
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
            <h2 className="section-heading__title">Вопросы о фреоне R290</h2>
          </div>
          <Accordion.Root
            className="faq__accordion"
            type="single"
            collapsible
            defaultValue="r290-0"
          >
            {faqItems.map(([question, answer], index) => (
              <Accordion.Item
                className="faq__item"
                value={`r290-${index}`}
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
            <p className="request-section__caption">Заявка на R290</p>
            <h2 className="request-section__title">Получите цену и расчет доставки</h2>
            <p className="request-section__description">
              Оставьте удобный контакт. Менеджер уточнит количество R290, подтвердит наличие, цену и
              условия получения.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm initialRefrigerant="R290" />
          </div>
        </div>
      </section>
    </main>
  );
}
