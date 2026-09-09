import React from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

export function ProductCard({ product, onRequest }) {
  return (
    <article className="product-card">
      <div className={`product-card__media${product.image ? "" : " product-card__media--placeholder"}`}>
        {product.image ? (
          <img
            className="product-card__image"
            src={product.image}
            alt={`${product.name}, баллон ${product.weight}`}
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder">
            <ImageIcon aria-hidden="true" />
            <span>Фото товара</span>
            <strong>{product.code}</strong>
          </div>
        )}
      </div>

      <div className="product-card__body">
        <div className="product-card__heading">
          <h3 className="product-card__title">{product.name}</h3>
          <span className="product-card__weight">{product.weight}</span>
        </div>
        <p className="product-card__variant">
          <span>Вариант</span>
          <strong>{product.variant}</strong>
        </p>
        <div className="product-card__actions">
          <button
            className="button button--dark product-card__action"
            type="button"
            onClick={() => onRequest({
              title: "Получить цену и оформить заказ",
              refrigerant: product.code,
            })}
          >
            Получить цену и оформить заказ
          </button>
          <a className="product-card__link" href={product.route}>
            Характеристики и применение <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
