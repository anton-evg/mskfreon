import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  FileCheck2,
  PackageCheck,
  Truck,
} from "lucide-react";
import { products } from "../data/siteData";
import { ProductCard } from "./ProductCard";
import { OrderForm } from "./OrderForm";
import { PriceLogic } from "./Sections";

const catalogFaqItems = [
  {
    question: "Как выбрать подходящую марку фреона?",
    answer:
      "Откройте карточку нужной марки, чтобы посмотреть характеристики и применение. Если требуется замена хладагента, совместимость оборудования должен проверить специалист.",
  },
  {
    question: "Можно заказать несколько разных марок?",
    answer:
      "Да. Выберите основную марку в форме, а остальные позиции и нужное количество укажите в комментарии.",
  },
  {
    question: "Как рассчитывается стоимость доставки?",
    answer:
      "Стоимость зависит от города, количества баллонов и способа получения. Менеджер рассчитает доставку вместе со стоимостью заказа.",
  },
  {
    question: "Как запросить документы на товар?",
    answer:
      "Укажите нужные документы в комментарии к заявке. По запросу предоставим ГТД и сертификат соответствия на выбранный фреон.",
  },
];

export function CatalogPage({ onRequest }) {
  useEffect(() => {
    document.title = "Каталог фреонов с ценами оптом и в розницу — РусХимСоюз";
  }, []);

  return (
    <main className="catalog-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <span>Каталог</span>
          </nav>

          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">Каталог фреонов с ценами оптом и в розницу</h1>
              <p className="inner-hero__offer">
                Выберите марку, количество и <strong>получите расчет заказа</strong>
              </p>
              <p className="inner-hero__description">
                R404A, R507, R134a и другие марки. В карточке указаны вес газа и варианты товара.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="#catalog-list">
                  Выбрать фреон <ArrowDown aria-hidden="true" />
                </a>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Получить цену и оформить заказ" })}
                >
                  Получить цену и оформить заказ
                </button>
              </div>
            </div>

            <div className="inner-hero__index" aria-hidden="true">
              <span>9</span>
              <strong>марок</strong>
              <p>для холодильного оборудования и систем кондиционирования</p>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog catalog-page__products section" id="catalog-list">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">
              Фреон для кондиционеров и холодильного оборудования
            </h2>
            <p className="section-heading__description">
              Выберите марку и откройте карточку товара, чтобы посмотреть характеристики,
              варианты и условия заказа.
            </p>
          </div>
          <div className="catalog__grid">
            {products.map((product) => (
              <ProductCard product={product} onRequest={onRequest} key={product.code} />
            ))}
          </div>
        </div>
      </section>

      <PriceLogic
        onRequest={() => onRequest({ title: "Получить цену и оформить заказ" })}
      />

      <section className="catalog-benefits section section--frost">
        <div className="container catalog-benefits__grid">
          <article className="catalog-benefits__item">
            <FileCheck2 aria-hidden="true" />
            <span>01</span>
            <h2>Документы по запросу</h2>
            <p>Для выбранного фреона предоставим ГТД и сертификат соответствия по запросу.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => onRequest({ title: "Запросить документы на товар" })}
            >
              Запросить документы <ArrowRight aria-hidden="true" />
            </button>
          </article>

          <article className="catalog-benefits__item">
            <Truck aria-hidden="true" />
            <span>02</span>
            <h2>Доставка по России и самовывоз</h2>
            <p>
              Доставляем по Москве и области, в регионы отправляем транспортными компаниями.
              Самовывоз возможен после поступления оплаты.
            </p>
            <a className="text-link" href="/delivery">
              Подробнее о доставке <ArrowRight aria-hidden="true" />
            </a>
          </article>

          <article className="catalog-benefits__item catalog-benefits__item--accent">
            <PackageCheck aria-hidden="true" />
            <span>03</span>
            <h2>Подбор партии под задачу</h2>
            <p>Оставьте удобный контакт. Менеджер уточнит детали и подготовит расчет.</p>
            <a className="text-link" href="#request">
              Перейти к заявке <ArrowRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </section>

      <section className="faq section">
        <div className="container faq__layout">
          <div className="section-heading">
            <h2 className="section-heading__title">Вопросы о заказе из каталога</h2>
          </div>
          <Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="catalog-0">
            {catalogFaqItems.map((item, index) => (
              <Accordion.Item className="faq__item" value={`catalog-${index}`} key={item.question}>
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
            <p className="request-section__caption">Заявка на расчет</p>
            <h2 className="request-section__title">Получите цену и оформите заказ</h2>
            <p className="request-section__description">
              Выберите фреон и укажите количество. Менеджер подтвердит наличие, цену и доставку.
            </p>
            <div className="request-section__contact">
              <div>
                <span>Или позвоните</span>
                <a href="tel:+79362198199">+7 936 219-81-99</a>
              </div>
            </div>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm />
          </div>
        </div>
      </section>
    </main>
  );
}
