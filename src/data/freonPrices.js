export const priceColumns = [
  { key: "cash", label: "Наличными" },
  { key: "transfer", label: "Перевод" },
  { key: "vat5", label: "НДС 5%" },
  { key: "vat22", label: "НДС 22%" },
];

export const freonPrices = {
  R22: {
    name: "R22",
    weight: "13,6 кг газа / 16,6 кг баллон",
    variants: [
      {
        rows: [
          { quantity: "От 1 шт.", cash: 9900, transfer: 10400, vat5: 11000, vat22: 12670 },
          { quantity: "От 10 шт.", cash: 9800, transfer: 10300, vat5: 10890, vat22: 12420 },
          { quantity: "От 50 шт.", cash: 9700, transfer: 10200, vat5: 10780, vat22: null },
        ],
      },
    ],
  },
  R410A: {
    name: "R410A",
    weight: "11,3 кг газа / 15,3 кг баллон",
    variants: [
      {
        name: "Refrigerant",
        rows: [
          { quantity: "От 1 шт.", cash: 10300, transfer: 10800, vat5: 11440, vat22: 13180 },
          { quantity: "От 10 шт.", cash: 10200, transfer: 10700, vat5: 11330, vat22: 12930 },
          { quantity: "От 50 шт.", cash: 10100, transfer: 10600, vat5: 11220, vat22: null },
        ],
      },
      {
        name: "Ассорти",
        rows: [
          { quantity: "От 1 шт.", cash: 11300, transfer: 11900, vat5: 12560, vat22: 14460 },
          { quantity: "От 10 шт.", cash: 11200, transfer: 11800, vat5: 12440, vat22: 14210 },
          { quantity: "От 50 шт.", cash: 11100, transfer: 11700, vat5: 12330, vat22: null },
        ],
      },
    ],
  },
  R404A: {
    name: "R404A",
    variants: [
      {
        name: "Баллон 10,9 кг газа",
        rows: [
          { quantity: "От 1 шт.", cash: 9700, transfer: 10200, vat5: 10780, vat22: 12420 },
          { quantity: "От 10 шт.", cash: 9600, transfer: 10100, vat5: 10670, vat22: 12160 },
          { quantity: "От 50 шт.", cash: 9500, transfer: 10000, vat5: 10560, vat22: null },
        ],
      },
      {
        name: "Баллон 9,5 кг газа",
        rows: [
          { quantity: "От 1 шт.", cash: 8600, transfer: 9000, vat5: 9560, vat22: 11010 },
          { quantity: "От 10 шт.", cash: 8500, transfer: 8900, vat5: 9440, vat22: 10750 },
          { quantity: "От 50 шт.", cash: 8400, transfer: 8800, vat5: 9330, vat22: null },
        ],
      },
    ],
  },
  R134a: {
    name: "R134a",
    weight: "13,6 кг газа / 16,6 кг баллон",
    variants: [
      {
        name: "Refrigerant",
        unavailable: true,
        rows: [
          { quantity: "От 1 шт.", cash: 11500, transfer: 12100, vat5: 12780, vat22: 14720 },
          { quantity: "От 10 шт.", cash: 11400, transfer: 12000, vat5: 12670, vat22: 17460 },
          { quantity: "От 50 шт.", cash: 11300, transfer: 11900, vat5: 12560, vat22: null },
        ],
      },
      {
        name: "JH, Flyer и Sanmei",
        rows: [
          { quantity: "От 1 шт.", cash: 14300, transfer: 15000, vat5: 15890, vat22: 18300 },
          { quantity: "От 10 шт.", cash: 14200, transfer: 14900, vat5: 15780, vat22: 18050 },
          { quantity: "От 50 шт.", cash: 14100, transfer: 14800, vat5: 15670, vat22: null },
        ],
      },
    ],
  },
  R407C: {
    name: "R407C",
    variants: [
      {
        name: "Баллон 11,3 кг газа",
        rows: [
          { quantity: "От 1 шт.", cash: 10600, transfer: 11100, vat5: 11780, vat22: 13570 },
          { quantity: "От 10 шт.", cash: 10500, transfer: 11000, vat5: 11670, vat22: 13310 },
          { quantity: "От 50 шт.", cash: 10400, transfer: 10900, vat5: 11560, vat22: null },
        ],
      },
      {
        name: "Баллон 10 кг газа",
        rows: [
          { quantity: "От 1 шт.", cash: 9500, transfer: 10000, vat5: 10560, vat22: 12160 },
          { quantity: "От 10 шт.", cash: 9400, transfer: 9900, vat5: 10440, vat22: 11900 },
          { quantity: "От 50 шт.", cash: 9300, transfer: 9800, vat5: 10330, vat22: null },
        ],
      },
    ],
  },
  R507: {
    name: "R507",
    weight: "11,3 кг газа / 14,6 кг баллон",
    variants: [
      {
        rows: [
          { quantity: "От 1 шт.", cash: 9700, transfer: 10200, vat5: 10780, vat22: 12420 },
          { quantity: "От 10 шт.", cash: 9600, transfer: 10100, vat5: 10670, vat22: 12160 },
          { quantity: "От 50 шт.", cash: 9500, transfer: 10000, vat5: 10560, vat22: null },
        ],
      },
    ],
  },
  R290: {
    name: "R290",
    weight: "5 кг газа",
    variants: [
      {
        rows: [
          { quantity: "От 1 шт.", cash: 6100, transfer: 6400, vat5: 6780, vat22: 7810 },
        ],
      },
    ],
  },
  R600: {
    name: "R600",
    weight: "6,5 кг газа",
    variants: [
      {
        rows: [
          { quantity: "От 1 шт.", cash: 6100, transfer: 6400, vat5: 6780, vat22: 7810 },
        ],
      },
    ],
  },
  R32: {
    name: "R32",
    weight: "9,5 кг газа",
    variants: [
      {
        rows: [
          { quantity: "От 1 шт.", cash: 11100, transfer: 11700, vat5: 12330, vat22: 14210 },
        ],
      },
    ],
  },
};

export function formatPrice(price) {
  if (price === null || price === undefined) {
    return "—";
  }

  return `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0")} ₽`;
}

export function getRetailCashPrice(code) {
  const priceList = freonPrices[code];

  if (!priceList) {
    return null;
  }

  const retailPrices = priceList.variants
    .filter((variant) => !variant.unavailable)
    .map((variant) => variant.rows[0]?.cash)
    .filter((price) => typeof price === "number");

  return retailPrices.length ? Math.min(...retailPrices) : null;
}
