import React, { useEffect } from "react";
import { ArrowRight, Home } from "lucide-react";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Страница не найдена — РусХимСоюз";
  }, []);

  return (
    <main className="not-found" id="top">
      <div className="container not-found__layout">
        <div className="not-found__code" aria-hidden="true">404</div>
        <div className="not-found__content">
          <p>Ошибка 404</p>
          <h1>Страница не найдена</h1>
          <span>Адрес мог измениться или страница была удалена.</span>
          <div className="not-found__actions">
            <a className="button button--primary" href="/products">Открыть каталог <ArrowRight aria-hidden="true" /></a>
            <a className="button button--outline" href="/"><Home aria-hidden="true" /> На главную</a>
          </div>
        </div>
      </div>
    </main>
  );
}
