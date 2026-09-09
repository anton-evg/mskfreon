import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  Catalog,
  Contacts,
  CookieNotice,
  Delivery,
  Documents,
  Faq,
  OrderProcess,
  PriceLogic,
  Proof,
  RequestSection,
} from "./components/Sections";
import { Footer } from "./components/Footer";
import { RequestDialog } from "./components/RequestDialog";
import { CatalogPage } from "./components/CatalogPage";
import { Freon404Page } from "./components/Freon404Page";
import { Freon507Page } from "./components/Freon507Page";
import { Freon134Page } from "./components/Freon134Page";
import { Freon410Page } from "./components/Freon410Page";
import { Freon32Page } from "./components/Freon32Page";
import { Freon22Page } from "./components/Freon22Page";
import { Freon407Page } from "./components/Freon407Page";
import { Freon600Page } from "./components/Freon600Page";
import { Freon290Page } from "./components/Freon290Page";
import { DeliveryPage } from "./components/DeliveryPage";
import { PaymentPage } from "./components/PaymentPage";
import { AboutPage } from "./components/AboutPage";
import { ContactsPage } from "./components/ContactsPage";
import { ArticlesPage } from "./components/ArticlesPage";
import { ArticlePage } from "./components/ArticlePage";
import { LegalPage } from "./components/LegalPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { SeoMeta } from "./components/SeoMeta";

const legacyRedirects = {
  "/kompaniya-ooo-mskfreon-krupneyshiy-postavshchik-freona-moskvy-i-rf-my-garantiruem-luchshie-ceny": "/",
  "/o-kompanii": "/about",
  "/dostavka-freona-po-moskve-i-v-regiony": "/delivery",
  "/tovar/freon-134": "/products/freon-134",
  "/tovar/freon-404": "/products/freon-404",
  "/tovar/freon-407": "/products/freon-407",
  "/tovar/freon-410": "/products/freon-410",
  "/tovar/freon-22": "/products/freon-22",
  "/tovar/freon-r507": "/products/freon-507",
  "/tovar/freon-r600": "/products/freon-600",
  "/tovar/freon-r12": "/articles/freon-r12",
  "/doc/freon-404a-primenenie-freonov-hladonov-vidy-freonov": "/articles/freon-404a-primenenie",
  "/doc/freony": "/articles/freony",
  "/pochemu-freon-nuzhno-kupit-u-nas-kachestvo-garantii": "/about#quality-guarantee",
  "/blog": "/articles",
  "/personal-data": "/personal-data-consent",
};

function LegacyRedirect({ target }) {
  useEffect(() => {
    window.location.replace(`${target}${window.location.search}`);
  }, [target]);

  return null;
}

const initialDialogState = {
  isOpen: false,
  title: "Получить цену и оформить заказ",
  refrigerant: "",
};

export function App({ initialPathname }) {
  const [dialogState, setDialogState] = useState(initialDialogState);

  const openRequestDialog = ({ title, refrigerant = "" }) => {
    setDialogState({ isOpen: true, title, refrigerant });
  };

  const closeRequestDialog = () => {
    setDialogState((currentState) => ({ ...currentState, isOpen: false }));
  };

  const browserPathname = typeof window === "undefined" ? "/" : window.location.pathname;
  const pathname = (initialPathname || browserPathname).replace(/\/$/, "") || "/";

  return (
    <>
      <Header onCallback={() => openRequestDialog({ title: "Заказать обратный звонок" })} />
      {legacyRedirects[pathname] ? (
        <LegacyRedirect target={legacyRedirects[pathname]} />
      ) : pathname === "/contacts" ? (
        <ContactsPage onRequest={openRequestDialog} />
      ) : pathname === "/articles/freon-404a-primenenie" ? (
        <ArticlePage articleKey="freon-404a-primenenie" />
      ) : pathname === "/articles/freon-r12" ? (
        <ArticlePage articleKey="freon-r12" />
      ) : pathname === "/articles/freony" ? (
        <ArticlePage articleKey="freony" />
      ) : pathname === "/articles" ? (
        <ArticlesPage />
      ) : pathname === "/privacy-policy" ? (
        <LegalPage type="privacy" />
      ) : pathname === "/personal-data-consent" ? (
        <LegalPage type="consent" />
      ) : pathname === "/about" ? (
        <AboutPage onRequest={openRequestDialog} />
      ) : pathname === "/payment" ? (
        <PaymentPage onRequest={openRequestDialog} />
      ) : pathname === "/delivery" ? (
        <DeliveryPage onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-290" ? (
        <Freon290Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-600" ? (
        <Freon600Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-407" ? (
        <Freon407Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-22" ? (
        <Freon22Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-32" ? (
        <Freon32Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-410" ? (
        <Freon410Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-134" ? (
        <Freon134Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-507" ? (
        <Freon507Page onRequest={openRequestDialog} />
      ) : pathname === "/products/freon-404" ? (
        <Freon404Page onRequest={openRequestDialog} />
      ) : pathname === "/products" ? (
        <CatalogPage onRequest={openRequestDialog} />
      ) : pathname === "/" ? (
        <main id="top">
          <Hero
            onRequest={() => openRequestDialog({ title: "Получить цену и оформить заказ" })}
          />
          <Catalog onRequest={openRequestDialog} />
          <PriceLogic
            onRequest={() => openRequestDialog({ title: "Получить цену и оформить заказ" })}
          />
          <OrderProcess />
          <Documents
            onRequest={() => openRequestDialog({ title: "Запросить документы на товар" })}
          />
          <Delivery onRequest={() => openRequestDialog({ title: "Рассчитать доставку" })} />
          <Proof />
          <Faq />
          <RequestSection />
          <Contacts
            onCallback={() => openRequestDialog({ title: "Заказать обратный звонок" })}
          />
        </main>
      ) : (
        <NotFoundPage />
      )}
      <Footer />
      <RequestDialog dialogState={dialogState} onClose={closeRequestDialog} />
      <CookieNotice />
      <SeoMeta pathname={pathname} />
    </>
  );
}
