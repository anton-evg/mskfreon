import React, { useState } from "react";
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

const initialDialogState = {
  isOpen: false,
  title: "Получить цену и оформить заказ",
  refrigerant: "",
};

export function App() {
  const [dialogState, setDialogState] = useState(initialDialogState);

  const openRequestDialog = ({ title, refrigerant = "" }) => {
    setDialogState({ isOpen: true, title, refrigerant });
  };

  const closeRequestDialog = () => {
    setDialogState((currentState) => ({ ...currentState, isOpen: false }));
  };

  const pathname = window.location.pathname.replace(/\/$/, "") || "/";

  return (
    <>
      <Header onCallback={() => openRequestDialog({ title: "Заказать обратный звонок" })} />
      {pathname === "/payment" ? (
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
      ) : (
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
      )}
      <Footer />
      <RequestDialog dialogState={dialogState} onClose={closeRequestDialog} />
      <CookieNotice />
    </>
  );
}
