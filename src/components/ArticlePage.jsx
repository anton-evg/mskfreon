import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, Info, ShieldAlert } from "lucide-react";

const articleData = {
  freony: {
    title: "Что такое фреоны",
    description: "Определение, состав и применение фреонов и хладонов.",
    marker: "F",
    readingTime: "3 минуты",
    sections: [
      {
        title: "Фреоны и хладоны",
        paragraphs: [
          "Фреоны, или хладоны, — техническое название группы насыщенных алифатических фторсодержащих углеводородов. Их применяют как хладагенты, пропелленты, вспениватели и растворители.",
          "Кроме атомов фтора фреоны могут содержать атомы хлора или брома. Название «фреон» фирмы DuPont в течение многих лет использовалось в технической литературе как общий термин для хладагентов. В СССР и России укоренился термин «хладоны».",
        ],
      },
      {
        title: "Как выбрать хладагент",
        paragraphs: [
          "Марку выбирают с учетом конструкции оборудования, рабочего давления, температурного диапазона, типа масла и требований производителя системы.",
        ],
        notice: "Замену хладагента и заправку оборудования должен выполнять подготовленный специалист.",
      },
    ],
    links: [{ label: "Открыть каталог фреонов", href: "/products" }],
  },
  "freon-404a-primenenie": {
    title: "Фреон R404A: применение и свойства",
    description: "Состав, рабочий диапазон, свойства и упаковка хладагента R404A.",
    marker: "404",
    readingTime: "6 минут",
    sections: [
      {
        title: "Состав и назначение R404A",
        paragraphs: [
          "R404A — околоазеотропная смесь R125, R143a и R134a в соотношении 44/52/4%. Хладагент разрабатывался как долгосрочная альтернатива R502.",
          "R404A применяют преимущественно в производственном холоде при температурах испарения от −50 до −20°C: в торговом и промышленном холодильном оборудовании, камерах и холодильном транспорте.",
        ],
      },
      {
        title: "Холодопроизводительность",
        paragraphs: [
          "Объемная холодопроизводительность R404A сравнима с R502. При температуре испарения −40°C теоретическая объемная холодопроизводительность примерно на 5% ниже, а показатель холодопроизводительности — на 5–8% ниже, чем у R502.",
          "Изменение состава смеси, циркулирующей в холодильной системе, может ухудшить энергетические характеристики, особенно в схемах с ресивером или при значительной длине коммуникационных линий.",
        ],
      },
      {
        title: "Совместимость и безопасность",
        paragraphs: [
          "R404A термически и химически стабилен. Как и другие гидрофторуглеродные хладагенты, он не смешивается с минеральными маслами. Для работы используют совместимые полиэфирные масла.",
          "R404A не следует смешивать с воздухом или допускать высокую концентрацию воздуха при давлении выше атмосферного и высокой температуре.",
        ],
        notice: "Совместимость оборудования, масла и фильтра-осушителя перед ретрофитом проверяет специалист.",
      },
      {
        title: "Тара и упаковка",
        paragraphs: ["Поставляется в стальном одноразовом баллоне 10,9 кг в картонной упаковке."],
      },
    ],
    links: [{ label: "Перейти к фреону R404A", href: "/products/freon-404" }],
  },
  "freon-r12": {
    title: "Фреон R12: свойства и применение",
    description: "Справочная информация о свойствах R12, областях применения и вариантах замены.",
    marker: "12",
    readingTime: "5 минут",
    sections: [
      {
        title: "Описание R12",
        paragraphs: [
          "R12, или дифтордихлорметан CF2Cl2, — бесцветный газ со специфическим запахом, относящийся к группе хлорфторуглеродов. Торговые названия: хладон R12, фреон R12, хладон 12 и фреон 12.",
          "Хладагент обладает высокой текучестью, слабо растворяется в воде, растворяется в масле и не проводит электрический ток. При объемной доле более 30% в воздухе существует риск удушья из-за недостатка кислорода.",
        ],
      },
      {
        title: "Применение",
        paragraphs: [
          "R12 применяли в одноступенчатых холодильных машинах, бытовых холодильниках, кондиционерах и водоохлаждающих установках. Также его использовали как газовый диэлектрик, пропеллент, порообразователь при получении пенопластов и растворитель.",
          "При температуре выше 330°C R12 разлагается с образованием опасных продуктов, включая хлорид водорода, фтористый водород и фосген.",
        ],
        notice: "Материал носит справочный характер. Подбор заменяющего хладагента выполняет специалист после проверки оборудования.",
      },
      {
        title: "Варианты замены",
        paragraphs: [
          "В архивном описании в качестве заменителей R12 указаны R134a, R406a и R600a. Они не являются универсальной прямой заменой: выбор зависит от конструкции системы, компрессора и масла.",
        ],
      },
      {
        title: "Тара, транспортировка и хранение",
        paragraphs: [
          "R12 поставлялся в баллонах по 13,6 кг. Баллоны перевозили всеми видами транспорта и хранили в закрытых складских помещениях или под навесом.",
        ],
      },
    ],
    links: [
      { label: "Перейти к фреону R134a", href: "/products/freon-134" },
      { label: "Перейти к фреону R600a", href: "/products/freon-600" },
    ],
  },
};

export function ArticlePage({ articleKey }) {
  const article = articleData[articleKey];

  useEffect(() => {
    document.title = `${article.title} — РусХимСоюз`;
  }, [article.title]);

  return (
    <main className="article-page" id="top">
      <section className="article-hero">
        <div className="container">
          <nav className="breadcrumbs breadcrumbs--light" aria-label="Хлебные крошки">
            <a href="/">Главная</a><span aria-hidden="true">/</span>
            <a href="/articles">Блог</a><span aria-hidden="true">/</span><span>{article.title}</span>
          </nav>
          <div className="article-hero__layout">
            <div>
              <p className="article-hero__type">Технический материал</p>
              <h1>{article.title}</h1>
              <p className="article-hero__description">{article.description}</p>
            </div>
            <div className="article-hero__meta" aria-hidden="true">
              <span>{article.marker}</span><p>Время чтения<br /><strong>{article.readingTime}</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="article-body section">
        <div className="container article-body__layout">
          <aside className="article-body__aside">
            <a className="text-link" href="/articles"><ArrowLeft aria-hidden="true" /> Все статьи</a>
            <p>Материал подготовлен на основе ранее опубликованного содержимого сайта.</p>
          </aside>
          <div className="article-body__content">
            {article.sections.map((section) => (
              <article className="article-body__section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.notice && (
                  <div className="article-body__notice">
                    {articleKey === "freony" ? <Info aria-hidden="true" /> : <ShieldAlert aria-hidden="true" />}
                    <p>{section.notice}</p>
                  </div>
                )}
              </article>
            ))}
            <div className="article-body__links">
              {article.links.map((link) => (
                <a className="button button--primary" href={link.href} key={link.href}>
                  {link.label} <ArrowRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
