export const formatDecimal = (num: number, min = 2, max = 6) =>
  num.toLocaleString("en-Us", {
    minimumFractionDigits: min,
    maximumFractionDigits: max,
  });

export const formatFiatNumber = (num: number) =>
  num.toLocaleString("en-Us", { style: "currency", currency: "USD" });
