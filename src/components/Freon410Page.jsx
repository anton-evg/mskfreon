import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ChevronDown, FileCheck2, Truck } from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";
import { LegacyProductDescription } from "./LegacyProductDescription";

const product = products.find((item) => item.code === "R410A");
const faqItems = [
  ["Для каких систем предназначен R410A?", "R410A предназначен для заправки новых систем кондиционирования воздуха высокого давления и отдельных тепловых насосов."],
  ["Является ли R410A заменой R22?", "R410A нельзя использовать в системе R22 без изменения конструкции оборудования. Рабочее давление и холодопроизводительность у них различаются."],
  ["Что важно знать о безопасности R410A?", "При соприкосновении с огнем и раскаленными поверхностями R410A разлагается с образованием токсичных продуктов. Работы должен выполнять специалист."],
  ["В какой таре поставляется R410A?", "Фреон R410A поставляется в баллонах по 11,3 кг. Актуальное наличие подтвердит менеджер."],
  ["Как получить заказ?", "Возможна доставка по Москве и области, отправка транспортной компанией в регионы России или самовывоз после поступления оплаты."],
];

export function Freon410Page({ onRequest }) {
  useEffect(() => { document.title = "Купить фреон R410A оптом — РусХимСоюз"; }, []);
  const request = (title) => onRequest({ title, refrigerant: "R410A" });
  return (
    <main className="product-page" id="top">
      <section className="product-hero"><div className="container">
        <nav className="breadcrumbs" aria-label="Хлебные крошки"><a href="/">Главная</a><span aria-hidden="true">/</span><a href="/products">Каталог</a><span aria-hidden="true">/</span><span>Фреон R410A</span></nav>
        <div className="product-hero__grid"><div className="product-hero__content">
          <p className="product-hero__code">R410A · ХЛАДАГЕНТ</p>
          <h1 className="product-hero__title">Купить фреон R410A оптом</h1>
          <p className="product-hero__offer">Для новых систем <strong>кондиционирования воздуха</strong></p>
          <p className="product-hero__description">Фреон R410A в баллонах 11,3 кг. Покажем цену от объема, подтвердим наличие и рассчитаем доставку.</p>
          <div className="product-hero__actions"><button className="button button--primary" type="button" onClick={() => request("Получить цену и оформить заказ")}>Получить цену и оформить заказ</button><button className="button button--outline" type="button" onClick={() => request("Запросить документы на фреон R410A")}>Запросить документы</button></div>
        </div><div className="product-hero__visual"><div className="product-hero__image-wrap"><img src={product.image} alt="Фреон R410A в баллоне" /></div><dl className="product-hero__details"><div><dt>Тара</dt><dd>Баллон 11,3 кг</dd></div><div><dt>Назначение</dt><dd>Новые системы кондиционирования</dd></div><div><dt>Состав</dt><dd>R125 и R32</dd></div></dl></div></div>
      </div></section>

      <section className="product-tiers section section--dark"><div className="container"><div className="section-heading section-heading--light"><h2 className="section-heading__title">Цена R410A зависит от количества баллонов</h2><p className="section-heading__description">Подготовим расчет для заказа от 1, 5, 20 и 100 баллонов. Для крупных закупок предложим индивидуальные условия.</p></div><div className="product-tiers__grid">{["1", "5", "20", "100"].map((quantity, index) => <article className="product-tiers__item" key={quantity}><span>{String(index + 1).padStart(2, "0")}</span><strong>{quantity}</strong><p>баллон{quantity === "1" ? "" : "ов"}</p><em>Цена по запросу</em></article>)}</div></div></section>

      <LegacyProductDescription code="R410A" />

      <section className="product-service section section--frost"><div className="container product-service__grid"><article className="product-service__item"><FileCheck2 aria-hidden="true" /><h2>Документы по запросу</h2><p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p><button className="text-link" type="button" onClick={() => request("Запросить документы на фреон R410A")}>Запросить документы <ArrowRight aria-hidden="true" /></button></article><article className="product-service__item"><Truck aria-hidden="true" /><h2>Доставка или самовывоз</h2><p>Доставляем по Москве и области, отправляем транспортной компанией в регионы. Самовывоз возможен после поступления оплаты.</p><a className="text-link" href="/delivery">Подробнее о доставке <ArrowRight aria-hidden="true" /></a></article></div></section>

      <section className="faq section"><div className="container faq__layout"><div className="section-heading"><h2 className="section-heading__title">Вопросы о фреоне R410A</h2></div><Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="r410a-0">{faqItems.map(([question, answer], index) => <Accordion.Item className="faq__item" value={`r410a-${index}`} key={question}><Accordion.Header className="faq__header"><Accordion.Trigger className="faq__trigger"><span>{question}</span><ChevronDown className="faq__chevron" aria-hidden="true" /></Accordion.Trigger></Accordion.Header><Accordion.Content className="faq__content"><p>{answer}</p></Accordion.Content></Accordion.Item>)}</Accordion.Root></div></section>

      <section className="request-section section" id="request"><div className="container request-section__layout"><div className="request-section__intro"><p className="request-section__caption">Заявка на R410A</p><h2 className="request-section__title">Получите цену и расчет доставки</h2><p className="request-section__description">Укажите количество баллонов R410A. Менеджер подтвердит наличие, цену и условия получения.</p></div><div className="request-section__form-wrap"><OrderForm initialRefrigerant="R410A" /></div></div></section>
    </main>
  );
}
