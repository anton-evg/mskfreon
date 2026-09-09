import React from "react";

const footerLinks = [
  ["Каталог", "/products"],
  ["Доставка", "/delivery"],
  ["Оплата", "/payment"],
  ["О компании", "/about"],
  ["Контакты", "/contacts"],
  ["Блог", "/blog"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand-column">
          <a className="site-footer__brand" href="/">РусХимСоюз</a>
          <p>Фреоны и хладагенты оптом</p>
          <a className="site-footer__phone" href="tel:+79362198199">+7 936 219-81-99</a>
        </div>

        <nav className="site-footer__navigation" aria-label="Навигация в подвале">
          <strong>Разделы</strong>
          {footerLinks.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="site-footer__legal">
          <strong>ООО «РусХимСоюз»</strong>
          <p>ИНН 9718276227 · КПП 771801001</p>
          <p>ОГРН 1257700053181</p>
          <p>АО «ТБанк» · БИК 044525974</p>
        </div>

        <address className="site-footer__address">
          <strong>Юридический адрес</strong>
          <p>
            107370, Россия, г. Москва, вн. тер. г. муниципальный округ Богородское,
            ул. Бойцовая, д. 2/30, помещ. 2/1/П
          </p>
        </address>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} ООО «РусХимСоюз»</span>
        <div>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <a href="/personal-data">Согласие на обработку персональных данных</a>
        </div>
      </div>
    </footer>
  );
}
