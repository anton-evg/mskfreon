import React from "react";
import { formatPrice, freonPrices, priceColumns } from "../data/freonPrices";

export function ProductPriceSection({ code }) {
  const priceList = freonPrices[code];

  if (!priceList) {
    return null;
  }

  const titleId = `${code.toLowerCase()}-prices-title`;

  return (
    <section className="product-prices section section--dark" aria-labelledby={titleId}>
      <div className="container">
        <div className="section-heading section-heading--light">
          <h2 className="section-heading__title" id={titleId}>
            Цены на фреон {priceList.name}
          </h2>
          <p className="section-heading__description">
            Стоимость одного баллона в рублях зависит от количества и способа оплаты.
            {priceList.weight ? ` Вес: ${priceList.weight}.` : ""}
          </p>
        </div>

        <div className="product-prices__variants">
          {priceList.variants.map((variant, variantIndex) => (
            <article
              className={`product-prices__variant${variant.unavailable ? " product-prices__variant--unavailable" : ""}`}
              key={variant.name || `${code}-${variantIndex}`}
            >
              {(variant.name || variant.unavailable) && (
                <header className="product-prices__variant-header">
                  <h3>{variant.name || priceList.name}</h3>
                  {variant.unavailable && <span>Нет в наличии</span>}
                </header>
              )}

              <div className="product-prices__table-wrap">
                <table className="product-prices__table">
                  <caption className="visually-hidden">
                    Цены на фреон {priceList.name}{variant.name ? `, ${variant.name}` : ""}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Количество</th>
                      {priceColumns.map((column) => (
                        <th scope="col" key={column.key}>{column.label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {variant.rows.map((row) => (
                      <tr key={row.quantity}>
                        <th scope="row">{row.quantity}</th>
                        {priceColumns.map((column) => (
                          <td key={column.key}>{formatPrice(row[column.key])}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>

        <p className="product-prices__note">
          Прочерк означает, что цена для выбранного объема и способа оплаты не указана.
        </p>
      </div>
    </section>
  );
}
