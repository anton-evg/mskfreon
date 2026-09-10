import refrigerant404 from "../../assets/404/404 Sanmei.jpg";
import refrigerant507 from "../../assets/507/507 Sanmei.jpg";
import refrigerant134 from "../../assets/134/134 Refrigerant.jpg";
import refrigerant410 from "../../assets/410/410 Refrigerant.jpg";
import refrigerant32 from "../../assets/32/32 Sanmei.jpg";
import refrigerant22 from "../../assets/22/22.jpg";
import refrigerant407 from "../../assets/407с/407c Sanmei.jpg";
import refrigerant600 from "../../assets/600/R600a.png";
import refrigerant290 from "../../assets/290/R290.png";

export const navigationItems = [
  { label: "Каталог", href: "/products" },
  { label: "Доставка", href: "/delivery" },
  { label: "Оплата", href: "/payment" },
  { label: "О компании", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export const products = [
  {
    code: "R404A",
    name: "Фреон R404A",
    weight: "10,9 кг или 9,5 кг",
    variant: "Sanmei",
    image: refrigerant404,
    route: "/products/freon-404",
  },
  {
    code: "R507",
    name: "Фреон R507",
    weight: "11,3 кг",
    variant: "Sanmei",
    image: refrigerant507,
    route: "/products/freon-507",
  },
  {
    code: "R134a",
    name: "Фреон R134a",
    weight: "13,6 кг",
    variant: "Refrigerant, JH, Flyer, Sanmei",
    image: refrigerant134,
    route: "/products/freon-134",
  },
  {
    code: "R410A",
    name: "Фреон R410A",
    weight: "11,3 кг",
    variant: "Refrigerant или ассорти",
    image: refrigerant410,
    route: "/products/freon-410",
  },
  {
    code: "R32",
    name: "Фреон R32",
    weight: "9,5 кг",
    variant: "Sanmei",
    image: refrigerant32,
    route: "/products/freon-32",
  },
  {
    code: "R22",
    name: "Фреон R22",
    weight: "13,6 кг",
    variant: "Вариант уточнит менеджер",
    image: refrigerant22,
    route: "/products/freon-22",
  },
  {
    code: "R407C",
    name: "Фреон R407C",
    weight: "11,3 кг или 10 кг",
    variant: "Sanmei",
    image: refrigerant407,
    route: "/products/freon-407",
  },
  {
    code: "R600",
    name: "Фреон R600",
    weight: "6,5 кг",
    variant: "Вариант уточнит менеджер",
    image: refrigerant600,
    route: "/products/freon-600",
  },
  {
    code: "R290",
    name: "Фреон R290",
    weight: "5 кг",
    variant: "Вариант уточнит менеджер",
    image: refrigerant290,
    route: "/products/freon-290",
  },
];

export const orderSteps = [
  {
    title: "Сообщите, какой фреон нужен",
    text: "Укажите марку, количество и город доставки.",
  },
  {
    title: "Получите цену и расчет доставки",
    text: "Менеджер подтвердит наличие, стоимость товара и доставки.",
  },
  {
    title: "Оформите заказ и оплатите счет",
    text: "Подготовим счет, при необходимости договор. Счет обычно формируется за 5–10 минут.",
  },
  {
    title: "Заберите товар или получите его через перевозчика",
    text: "После поступления оплаты возможен самовывоз или передача заказа транспортной компании.",
  },
];

export const documentItems = [
  { title: "ГТД", text: "Государственная таможенная декларация по запросу." },
  {
    title: "Сертификат соответствия",
    text: "Предоставляется по запросу на выбранный товар.",
  },
  {
    title: "Документы вместе с расчетом",
    text: "Укажите в заявке, какие документы нужны для вашей закупки.",
  },
];

export const deliveryItems = [
  {
    title: "Москва и область",
    text: "Доставляем собственными курьерами в день обращения или на следующий день, если это позволяет загрузка.",
  },
  {
    title: "Регионы России",
    text: "Передаем заказ транспортной компании. Срок и стоимость зависят от города и выбранного перевозчика.",
  },
  {
    title: "Самовывоз",
    text: "Заберите заказ после поступления оплаты на расчетный счет.",
  },
];

export const proofFacts = [
  { value: "4 года", label: "на рынке" },
  { value: "6 складов", label: "в разных городах" },
  { value: "8 000+", label: "клиентов" },
  { value: "20 000+", label: "отгруженных заказов" },
];

export const proofGallery = [
  { image: refrigerant507, alt: "Баллон фреона R507 на складе" },
  { image: refrigerant134, alt: "Баллон фреона R134a на складе" },
  { image: refrigerant410, alt: "Баллон фреона R410A на складе" },
  { image: refrigerant32, alt: "Баллон фреона R32 на складе" },
];

export const faqItems = [
  {
    question: "Как узнать актуальную цену?",
    answer: "Выберите позицию в каталоге. На странице товара указаны цены за один баллон для разных объемов и способов оплаты.",
  },
  {
    question: "Как проверить наличие?",
    answer: "Менеджер подтвердит наличие выбранной марки перед оформлением заказа.",
  },
  {
    question: "Какие документы можно получить?",
    answer: "По запросу предоставим ГТД и сертификат соответствия на выбранный фреон.",
  },
  {
    question: "Как рассчитывается доставка?",
    answer: "Стоимость и срок зависят от города, объема заказа и способа получения. Менеджер подготовит расчет вместе с ценой товара.",
  },
  {
    question: "Можно ли купить несколько баллонов?",
    answer: "Да. Для основных позиций указаны цены от 1, 10 и 50 баллонов. Для R290, R600 и R32 указана цена от 1 баллона.",
  },
  {
    question: "Как получить оплаченный товар?",
    answer: "Возможен самовывоз после поступления оплаты или передача заказа в доставку и транспортную компанию.",
  },
];
