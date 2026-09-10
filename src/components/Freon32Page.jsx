import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ChevronDown, FileCheck2, ShieldCheck, Truck } from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";
import { ProductPriceSection } from "./ProductPriceSection";

const product = products.find((item) => item.code === "R32");
const faqItems = [
  ["В какой таре поставляется R32?", "Фреон R32 поставляется в баллонах по 9,5 кг. Актуальное наличие подтвердит менеджер."],
  ["Для каких систем применяется R32?", "Техническое назначение и совместимость R32 зависят от конструкции конкретного оборудования. Перед заправкой характеристики проверяет специалист."],
  ["Как узнать цену R32?", "В таблице указана цена одного баллона R32 для оплаты наличными, переводом, с НДС 5% и НДС 22%."],
  ["Какие документы можно получить?", "По запросу предоставим ГТД и сертификат соответствия на выбранный фреон."],
  ["Как получить заказ?", "Возможна доставка по Москве и области, отправка транспортной компанией в регионы России или самовывоз после поступления оплаты."],
];

export function Freon32Page({ onRequest }) {
  useEffect(() => { document.title = "Купить фреон R32 в Москве оптом и в розницу — РусХимСоюз"; }, []);
  const request = (title) => onRequest({ title, refrigerant: "R32" });
  return (
    <main className="product-page" id="top">
      <section className="product-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span aria-hidden="true">/</span><a href="/products">Каталог</a><span aria-hidden="true">/</span><span>Фреон R32</span></nav>
        <div className="product-hero__grid"><div className="product-hero__content">
          <p className="product-hero__code">R32 · ХЛАДАГЕНТ</p>
          <h1 className="product-hero__title">Купить фреон R32 в Москве оптом и в розницу</h1>
          <p className="product-hero__offer">Фреон R32 для <strong>систем кондиционирования</strong></p>
          <p className="product-hero__description">Фреон R32 в баллонах 9,5 кг. Покажем цену от объема, подтвердим наличие и рассчитаем доставку.</p>
          <div className="product-hero__actions"><button className="button button--primary" type="button" onClick={() => request("Получить цену и оформить заказ")}>Получить цену и оформить заказ</button><button className="button button--outline" type="button" onClick={() => request("Запросить документы на фреон R32")}>Запросить документы</button></div>
        </div><div className="product-hero__visual"><div className="product-hero__image-wrap"><img src={product.image} alt="Фреон R32 в баллоне Sanmei" /></div><dl className="product-hero__details"><div><dt>Тара</dt><dd>Баллон 9,5 кг</dd></div><div><dt>Назначение</dt><dd>Системы кондиционирования</dd></div><div><dt>Вариант</dt><dd>Sanmei</dd></div></dl></div></div>
      </div></section>

      <ProductPriceSection code="R32" />

      <section className="product-content section"><div className="container product-content__grid"><aside className="product-content__aside"><span>R32</span><p>Поставка и особенности хладагента</p></aside><div className="product-content__body"><article className="product-content__article"><h2>Поставка фреона R32</h2><p>Фреон R32 поставляется в баллонах по 9,5 кг. Мы подтверждаем наличие, актуальную цену и условия доставки перед оформлением заказа.</p><p>Марку, количество баллонов и вариант товара можно указать в заявке. Для регулярных закупок подготовим отдельный расчет.</p></article><article className="product-content__article"><h2>Подбор R32 для оборудования</h2><p>Технические характеристики, сферу применения и правила хранения R32 необходимо сверять с паспортом конкретного товара и требованиями оборудования.</p><div className="product-content__notice"><ShieldCheck aria-hidden="true" /><p>Заправку и работы с холодильным контуром должен выполнять специалист, прошедший профессиональную подготовку.</p></div></article></div></div></section>

      <section className="product-service section section--frost"><div className="container product-service__grid"><article className="product-service__item"><FileCheck2 aria-hidden="true" /><h2>Документы по запросу</h2><p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p><button className="text-link" type="button" onClick={() => request("Запросить документы на фреон R32")}>Запросить документы <ArrowRight aria-hidden="true" /></button></article><article className="product-service__item"><Truck aria-hidden="true" /><h2>Доставка или самовывоз</h2><p>Доставляем по Москве и области, отправляем транспортной компанией в регионы. Самовывоз возможен после поступления оплаты.</p><a className="text-link" href="/delivery">Подробнее о доставке <ArrowRight aria-hidden="true" /></a></article></div></section>

      <section className="faq section"><div className="container faq__layout"><div className="section-heading"><h2 className="section-heading__title">Вопросы о фреоне R32</h2></div><Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="r32-0">{faqItems.map(([question, answer], index) => <Accordion.Item className="faq__item" value={`r32-${index}`} key={question}><Accordion.Header className="faq__header"><Accordion.Trigger className="faq__trigger"><span>{question}</span><ChevronDown className="faq__chevron" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="faq__content"><p>{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

      <section className="request-section section" id="request"><div className="container request-section__layout"><div className="request-section__intro"><p className="request-section__caption">Заявка на R32</p><h2 className="request-section__title">Получите цену и расчет доставки</h2><p className="request-section__description">Укажите количество баллонов R32. Менеджер подтвердит наличие, цену и условия получения.</p></div><div className="request-section__form-wrap"><OrderForm initialRefrigerant="R32" /></div></div></section>
    </main>
  );
}
