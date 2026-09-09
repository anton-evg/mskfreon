import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "../data/siteData";

export function Header({ onCallback }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__utility container">
        <span>Офис в Москве · поставки по России</span>
        <a className="site-header__phone" href="tel:+79362198199">
          +7 936 219-81-99
        </a>
      </div>

      <div className="site-header__main container">
        <a className="site-header__brand" href="/" aria-label="РусХимСоюз — главная">
          <span className="site-header__brand-name">РусХимСоюз</span>
          <span className="site-header__brand-caption">Фреоны и хладагенты оптом</span>
        </a>

        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="visually-hidden">Открыть меню</span>
        </button>

        <nav
          className={`site-header__navigation${isMenuOpen ? " site-header__navigation--open" : ""}`}
          id="main-navigation"
          aria-label="Основная навигация"
        >
          {navigationItems.map((item) => (
            <a
              className="site-header__navigation-link"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="site-header__mobile-phone" href="tel:+79362198199">
            +7 936 219-81-99
          </a>
          <button className="button button--outline site-header__mobile-callback" type="button" onClick={onCallback}>
            Обратный звонок
          </button>
        </nav>

        <button className="button button--outline site-header__callback" type="button" onClick={onCallback}>
          Обратный звонок
        </button>
      </div>
    </header>
  );
}
