import React, { useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Calculator,
  MapPin,
  PackageCheck,
  Truck,
} from "lucide-react";
import { OrderForm } from "./OrderForm";

const deliveryOptions = [
  {
    icon: Truck,
    number: "01",
    title: "Москва и область",
    text: "Доставляем собственными курьерами в день обращения или на следующий день, если это позволяет загрузка.",
  },
  {
    icon: MapPin,
    number: "02",
    title: "Регионы России",
    text: "Передаем заказ транспортной компании. Срок и стоимость зависят от города и выбранного перевозчика.",
  },
  {
    icon: PackageCheck,
    number: "03",
    title: "Самовывоз",
    text: "Заберите заказ после поступления оплаты на расчетный счет.",
  },
];

export function DeliveryPage({ onRequest }) {
  useEffect(() => {
    document.title = "Доставка фреона по Москве и России — РусХимСоюз";
  }, []);

  return (
    <main className="delivery-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a>
            <span aria-hidden="true">/</span>
            <span>Доставка</span>
          </nav>

          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">Доставка фреона по Москве и России</h1>
              <p className="inner-hero__offer">
                Рассчитаем стоимость и <strong>подберем способ получения</strong>
              </p>
              <p className="inner-hero__description">
                Доставляем по Москве и области, в регионы передаем заказ транспортной
                компании. Для расчета укажите марку, количество и город.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="#delivery-options">
                  Выбрать способ получения <ArrowDown aria-hidden="true" />
                </a>
                <button
                  className="button button--outline"
                  type="button"
                  onClick={() => onRequest({ title: "Рассчитать доставку" })}
                >
                  Рассчитать доставку
                </button>
              </div>
            </div>

            <div className="inner-hero__index" aria-hidden="true">
              <span>3</span>
              <strong>способа</strong>
              <p>получить заказ в Москве, области или регионе России</p>
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-benefits section section--frost" id="delivery-options">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Получите заказ удобным способом</h2>
            <p className="section-heading__description">
              Сообщите марку фреона, количество баллонов и город. Менеджер рассчитает
              стоимость товара и доставки.
            </p>
          </div>
          <div className="catalog-benefits__grid">
            {deliveryOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article className="catalog-benefits__item" key={option.number}>
                  <Icon aria-hidden="true" />
                  <span>{option.number}</span>
                  <h2>{option.title}</h2>
                  <p>{option.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="product-content section">
        <div className="container product-content__grid">
          <aside className="product-content__aside">
            <span>01–03</span>
            <p>Расчет, оплата и получение</p>
          </aside>

          <div className="product-content__body">
            <article className="product-content__article">
              <h2>Как оформить доставку</h2>
              <p>
                Укажите марку фреона, количество баллонов и город получения. Менеджер
                подготовит расчет товара и доставки, после чего выставит счет.
              </p>
              <p>
                После поступления оплаты заказ можно забрать самостоятельно или передать
                в доставку и транспортную компанию.
              </p>
            </article>

            <article className="product-content__article">
              <h2>Доставка фреона по Москве и в регионы</h2>
              <p>
                ООО «РусХимСоюз» организует доставку фреона по Москве и отправку в
                регионы России. Стоимость доставки партии зависит от ее объема и
                направления.
              </p>
              <div className="product-content__notice">
                <Calculator aria-hidden="true" />
                <p>
                  Чтобы рассчитать доставку, укажите в заявке марку, количество баллонов
                  и город получения.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="request-section section" id="request">
        <div className="container request-section__layout">
          <div className="request-section__intro">
            <p className="request-section__caption">Расчет доставки</p>
            <h2 className="request-section__title">Рассчитайте доставку вместе с заказом</h2>
            <p className="request-section__description">
              Оставьте удобный контакт. Менеджер уточнит детали и рассчитает
              стоимость товара и доставки.
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
