import React, { useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileCheck2,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { products } from "../data/siteData";
import { OrderForm } from "./OrderForm";

const product = products.find((item) => item.code === "R404A");

const details = [
  ["Тара", "Баллоны 10,9 кг и 9,5 кг"],
  ["Назначение", "Холодильное оборудование средних и низких температур"],
  ["Вариант", "Sanmei"],
];

const faqItems = [
  {
    question: "Где применяется фреон R404A?",
    answer:
      "R404A используют в холодильном оборудовании средних и низких температур: торговых холодильниках, камерах, промышленном холоде и холодильном транспорте.",
  },
  {
    question: "Можно ли использовать R404A как замену R502 или R22?",
    answer:
      "R404A применяют как замену R502, а также при ретрофите отдельных систем на R22. Совместимость оборудования, масла и фильтра-осушителя должен подтвердить специалист.",
  },
  {
    question: "В какой таре поставляется R404A?",
    answer: "Доступны баллоны 10,9 кг и 9,5 кг. Вариант товара и актуальное наличие подтвердит менеджер.",
  },
  {
    question: "Какие документы можно получить?",
    answer: "По запросу предоставим ГТД и сертификат соответствия на выбранный товар.",
  },
  {
    question: "Как получить заказ?",
    answer:
      "Возможна доставка по Москве и области, отправка транспортной компанией в регионы России или самовывоз после поступления оплаты.",
  },
];

export function Freon404Page({ onRequest }) {
  useEffect(() => {
    document.title = "Купить фреон R404A оптом — РусХимСоюз";
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
            <span>Фреон R404A</span>
          </nav>

          <div className="product-hero__grid">
            <div className="product-hero__content">
              <p className="product-hero__code">R404A · ХЛАДАГЕНТ</p>
              <h1 className="product-hero__title">Купить фреон R404A оптом</h1>
              <p className="product-hero__offer">
                Для холодильного оборудования <strong>низких и средних температур</strong>
              </p>
              <p className="product-hero__description">
                Фреон R404A в баллонах 10,9 кг и 9,5 кг. Покажем цену от объема,
                подтвердим наличие и рассчитаем доставку.
              </p>
              <div className="product-hero__actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => onRequest({ title: "Получить цену и оформить заказ", refrigerant: "R404A" })}
                >
                  Получить цену и оформить заказ
                </button>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Запросить документы на фреон R404A", refrigerant: "R404A" })}
                >
                  Запросить документы
                </button>
              </div>
            </div>

            <div className="product-hero__visual">
              <div className="product-hero__image-wrap">
                <img src={product.image} alt="Фреон R404A в баллоне Sanmei" />
              </div>
              <dl className="product-hero__details">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="product-tiers section section--dark">
        <div className="container">
          <div className="section-heading section-heading--light">
            <h2 className="section-heading__title">Цена R404A зависит от количества баллонов</h2>
            <p className="section-heading__description">
              Подготовим расчет для заказа от 1, 5, 20 и 100 баллонов. Для крупных закупок
              предложим индивидуальные условия.
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

      <section className="product-content section">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>R404A</span>
            <p>Применение и особенности хладагента</p>
          </aside>
          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Описание фреона R404A</h2>
              <p>
                R404A является бесцветным газом, квазиазеотропной смесью
                R125/R143a/R134a. Торговое название — хладон R404A, фреон R404A. Изначально
                R404A использовался в оборудовании, рассчитанном на низкие и средние
                температуры кипения.
              </p>
              <p>
                Сегодня R404A используют в качестве заменителя R502 при ретрофите систем.
                Для этого необходимо заменить минеральное масло на полиэфирное и заменить
                фильтр-осушитель. Изменение состава смеси, циркулирующей в холодильной
                системе, может привести к ухудшению ее энергетических характеристик,
                особенно в схемах с ресивером или при значительной длине трубопроводов.
              </p>
              <p>
                Рекомендуемые масла: PLANETELF ACD 32, 46, 68; Mobil EAL Arctic 32, 46,
                68, 100; Suniso SL 32, 46, 68.
              </p>
            </article>

            <article className="product-content__article">
              <h2>Применение фреона R404A</h2>
              <p>
                Фреон R404A разрабатывался в качестве долгосрочной замены хладона R502 и
                хладона R22 в холодильных системах, работающих в диапазоне средних и низких
                температур. К такому оборудованию относятся низкотемпературные торговые и
                промышленные холодильники.
              </p>
              <p>
                Хладагент применяют для охлаждения пищевых продуктов на торговых
                предприятиях, на холодильном транспорте и для охлаждения наливных систем в
                промышленности. R404A используют как заменитель R502 и R22 после проверки
                совместимости оборудования специалистом.
              </p>
            </article>

            <article className="product-content__article">
              <h2>Свойства и сравнение с R502</h2>
              <p>
                При температуре испарения −40°C теоретическая объемная хладопроизводительность
                примерно на 5% ниже, а показатель хладопроизводительности на 5–8% ниже, чем у
                R502. R404A не горит, имеет сравнимую с R502 токсичность, термически и
                химически стабилен.
              </p>
              <div className="product-content__notice">
                <ShieldCheck aria-hidden="true" />
                <p>
                  Компонент R143a в чистом виде может быть горючим при повышенных
                  температуре и давлении. Не смешивайте R404A с воздухом и сверяйте
                  технические параметры с паспортом товара.
                </p>
              </div>
            </article>

            <article className="product-content__article">
              <h2>Тара, транспортировка и хранение</h2>
              <p>
                Фреон R404A поставляется в стальных одноразовых баллонах по 10,9 кг в
                картонной упаковке. Также в каталоге представлен вариант фасовки 9,5 кг.
              </p>
              <p>
                Транспортировать этот вид фреона можно всеми видами транспорта при строгом
                соблюдении правил перевозки опасных грузов. Хранить фреон необходимо в
                сухом складском помещении с защитой от солнечных лучей.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="product-service section section--frost">
        <div className="container product-service__grid">
          <article className="product-service__item">
            <FileCheck2 aria-hidden="true" />
            <h2>Документы по запросу</h2>
            <p>Предоставим ГТД и сертификат соответствия на выбранный фреон.</p>
            <button
              className="text-link"
              type="button"
              onClick={() => onRequest({ title: "Запросить документы на фреон R404A", refrigerant: "R404A" })}
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
            <h2 className="section-heading__title">Вопросы о фреоне R404A</h2>
          </div>
          <Accordion.Root className="faq__accordion" type="single" collapsible defaultValue="r404a-0">
            {faqItems.map((item, index) => (
              <Accordion.Item className="faq__item" value={`r404a-${index}`} key={item.question}>
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
            <p className="request-section__caption">Заявка на R404A</p>
            <h2 className="request-section__title">Получите цену и расчет доставки</h2>
            <p className="request-section__description">
              Укажите количество баллонов R404A. Менеджер подтвердит наличие, цену и условия
              получения.
            </p>
          </div>
          <div className="request-section__form-wrap">
            <OrderForm initialRefrigerant="R404A" />
          </div>
        </div>
      </section>
    </main>
  );
}
