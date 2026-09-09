import React, { useEffect } from "react";
import { ArrowDown, ArrowRight, BookOpen, FlaskConical, Snowflake } from "lucide-react";

const articles = [
  {
    icon: BookOpen,
    label: "Основы",
    title: "Что такое фреоны",
    text: "Определение фреонов и хладонов, состав и основные области применения.",
    href: "/articles/freony",
  },
  {
    icon: Snowflake,
    label: "R404A",
    title: "Фреон R404A: применение и свойства",
    text: "Состав смеси, рабочий диапазон, свойства и совместимость с маслами.",
    href: "/articles/freon-404a-primenenie",
  },
  {
    icon: FlaskConical,
    label: "R12",
    title: "Фреон R12: свойства и применение",
    text: "Справочная информация о хладагенте R12 и указанных вариантах замены.",
    href: "/articles/freon-r12",
  },
];

export function ArticlesPage() {
  useEffect(() => {
    document.title = "Блог о фреонах и холодильном оборудовании";
  }, []);

  return (
    <main className="articles-page" id="top">
      <section className="inner-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <a href="/">Главная</a><span aria-hidden="true">/</span><span>Блог</span>
          </nav>
          <div className="inner-hero__layout">
            <div className="inner-hero__content">
              <h1 className="inner-hero__title">Блог о фреонах и холодильном оборудовании</h1>
              <p className="inner-hero__offer">Техническая информация для <strong>выбора хладагента</strong></p>
              <p className="inner-hero__description">
                Справочные материалы о свойствах, применении и особенностях фреонов.
              </p>
              <div className="inner-hero__actions">
                <a className="button button--primary" href="#articles-list">
                  Читать статьи <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="inner-hero__index" aria-hidden="true">
              <span>3</span><strong>материала</strong><p>о фреонах, свойствах и применении хладагентов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="article-catalog section section--frost" id="articles-list">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Материалы о фреонах</h2>
            <p className="section-heading__description">
              Статьи отвечают на технические вопросы и ведут к релевантным товарам.
            </p>
          </div>
          <div className="article-catalog__grid">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <article className="article-card" key={article.href}>
                  <div className="article-card__top"><Icon aria-hidden="true" /><span>0{index + 1}</span></div>
                  <p className="article-card__label">{article.label}</p>
                  <h2>{article.title}</h2>
                  <p>{article.text}</p>
                  <a className="text-link" href={article.href}>Читать статью <ArrowRight aria-hidden="true" /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
