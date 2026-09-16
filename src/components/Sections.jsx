import React, { useEffect, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  FileText,
  MapPin,
  PackageCheck,
  Phone,
  Truck,
  Warehouse,
} from "lucide-react";
import {
  deliveryItems,
  documentItems,
  faqItems,
  orderSteps,
  products,
  proofFacts,
  proofGallery,
} from "../data/siteData";
import { ProductCard } from "./ProductCard";
import { OrderForm } from "./OrderForm";

export function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  );
}

export function Catalog({ onRequest }) {
  return (
    <section className="catalog section" id="catalog">
      <div className="container">
        <SectionHeading
          eyebrow="Основные марки в ассортименте"
          title="Выберите фреон и сразу увидите условия поставки"
          description="В карточке указаны вес газа и доступные варианты. Наличие и стоимость доставки подтверждаем перед оформлением."
        />
        <div className="catalog__grid">
          {products.map((product) => (
            <ProductCard product={product} onRequest={onRequest} key={product.code} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PriceLogic({ onRequest }) {
  const priceTiers = [
    { amount: "6 100 ₽", label: "Наличными", note: "Минимальная цена в каталоге" },
    { amount: "6 400 ₽", label: "Перевод", note: "Минимальная цена в каталоге" },
    { amount: "6 780 ₽", label: "НДС 5%", note: "Минимальная цена в каталоге" },
    { amount: "7 810 ₽", label: "НДС 22%", note: "Минимальная цена в каталоге" },
  ];

  return (
    <section className="price-logic section section--dark">
      <div className="container">
        <SectionHeading
          light
          title="Цены для четырех способов оплаты"
          description="Показываем стоимость одного баллона от 1 штуки. На страницах товаров указаны оптовые цены от 10 и 50 баллонов."
        />

        <div className="price-logic__scale">
          {priceTiers.map((tier, index) => (
            <article className="price-logic__tier" key={tier.amount}>
              <span className="price-logic__index">{String(index + 1).padStart(2, "0")}</span>
              <strong className="price-logic__amount">{tier.amount}</strong>
              <h3 className="price-logic__label">{tier.label}</h3>
              <p className="price-logic__note">{tier.note}</p>
              <span className="price-logic__value">Цена от 1 баллона</span>
            </article>
          ))}
        </div>

        <div className="price-logic__footer">
          <p>Цена зависит от марки, веса и варианта товара. Наличие и стоимость доставки подтверждаем перед оформлением.</p>
          <button className="button button--primary" type="button" onClick={onRequest}>
            Получить цену и оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
}

export function OrderProcess() {
  return (
    <section className="order-process section" id="order-process">
      <div className="container">
        <SectionHeading
          title="От запроса до отгрузки товара"
          description="Оставьте удобный контакт. Менеджер уточнит детали, рассчитает заказ и подскажет способ получения."
        />
        <ol className="order-process__list">
          {orderSteps.map((step, index) => (
            <li className="order-process__item" key={step.title}>
              <span className="order-process__number">{String(index + 1).padStart(2, "0")}</span>
              <div className="order-process__content">
                <h3 className="order-process__title">{step.title}</h3>
                <p className="order-process__text">{step.text}</p>
              </div>
              {index < orderSteps.length - 1 && <ArrowRight className="order-process__arrow" aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <a className="text-link" href="#request">
          Перейти к заявке <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function Documents({ onRequest }) {
  const icons = [FileText, FileCheck2, CheckCircle2];

  return (
    <section className="documents section section--frost">
      <div className="container documents__layout">
        <div className="documents__intro">
          <SectionHeading
            title="Документы для проверки товара и закупки"
            description="По запросу предоставим ГТД и сертификат соответствия на выбранный фреон."
          />
          <button className="button button--dark" type="button" onClick={onRequest}>
            Запросить документы на товар
          </button>
        </div>
        <div className="documents__list">
          {documentItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="documents__item" key={item.title}>
                <Icon className="documents__icon" aria-hidden="true" />
                <div>
                  <h3 className="documents__title">{item.title}</h3>
                  <p className="documents__text">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Delivery({ onRequest }) {
  const icons = [Truck, Warehouse, PackageCheck];

  return (
    <section className="delivery section" id="delivery">
      <div className="container">
        <SectionHeading
          title="Получите фреон удобным способом"
          description="Доставим заказ по Москве и области или передадим его транспортной компании для отправки по России."
        />
        <div className="delivery__grid">
          {deliveryItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="delivery__item" key={item.title}>
                <div className="delivery__icon-wrap"><Icon aria-hidden="true" /></div>
                <span className="delivery__number">0{index + 1}</span>
                <h3 className="delivery__title">{item.title}</h3>
                <p className="delivery__text">{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="delivery__actions">
          <a className="text-link" href="/delivery">Подробнее о доставке <ArrowRight aria-hidden="true" /></a>
          <button className="button button--primary" type="button" onClick={onRequest}>Рассчитать доставку</button>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section className="proof section section--dark" id="about">
      <div className="container">
        <SectionHeading
          light
          title="Поставляем фреон для регулярных и крупных закупок"
          description="Работаем с сервисными компаниями, закупщиками и региональными партнерами по всей России."
        />
        <dl className="proof__facts">
          {proofFacts.map((fact) => (
            <div className="proof__fact" key={fact.value}>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
        <div className="proof__gallery">
          {proofGallery.map((item, index) => (
            <figure className={`proof__photo proof__photo--${index + 1}`} key={item.alt}>
              <img src={item.image} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
        <a className="text-link text-link--light" href="/about">
          О компании и документах <ArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq section">
      <div className="container faq__layout">
        <SectionHeading title="Ответы на вопросы перед заказом" />
        <Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="item-0">
          {faqItems.map((item, index) => (
            <Accordion.Item className="faq__item" value={`item-${index}`} key={item.question}>
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
  );
}

export function RequestSection() {
  return (
    <section className="request-section section" id="request">
      <div className="container request-section__layout">
        <div className="request-section__intro">
          <p className="request-section__caption">Заявка на расчет</p>
          <h2 className="request-section__title">Получите цену, наличие и расчет доставки</h2>
          <p className="request-section__description">
            Оставьте удобный контакт. Менеджер уточнит детали и подготовит расчет.
          </p>
          <div className="request-section__contact">
            <Phone aria-hidden="true" />
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
  );
}

export function Contacts({ onCallback }) {
  return (
    <section className="contacts section" id="contacts">
      <div className="container contacts__layout">
        <div className="contacts__heading">
          <h2 className="contacts__title">Уточните условия заказа у менеджера</h2>
          <p className="contacts__description">
            Позвоните или оставьте заявку, чтобы подтвердить наличие, цену и доставку.
          </p>
        </div>
        <div className="contacts__details">
          <div className="contacts__detail">
            <Phone aria-hidden="true" />
            <div>
              <span>Телефон</span>
              <a href="tel:+79362198199">+7 936 219-81-99</a>
              <small>Ольга</small>
            </div>
          </div>
          <div className="contacts__detail">
            <MapPin aria-hidden="true" />
            <div>
              <span>География</span>
              <strong>Офис в Москве</strong>
              <small>Поставки по России</small>
            </div>
          </div>
        </div>
        <div className="contacts__actions">
          <button className="button button--primary" type="button" onClick={onCallback}>Обратный звонок</button>
          <a className="text-link" href="/contacts">Открыть страницу контактов <ArrowRight aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(window.localStorage.getItem("mskfreon-cookie-consent") !== "accepted");
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem("mskfreon-cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-notice" aria-label="Уведомление о cookie">
      <div className="cookie-notice__icon"><Building2 aria-hidden="true" /></div>
      <div className="cookie-notice__content">
        <strong>Мы используем cookie для работы сайта и анализа посещаемости.</strong>
        <p>
          Даю согласие на <a href="/personal-data-consent">обработку персональных данных</a> и ознакомлен с
          {" "}<a href="/privacy-policy">Политикой конфиденциальности</a>.
        </p>
      </div>
      <button className="button button--dark cookie-notice__button" type="button" onClick={acceptCookies}>Принять</button>
    </aside>
  );
}
