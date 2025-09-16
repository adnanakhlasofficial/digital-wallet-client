export const formatCurrency = (
  value: number,

): string => {
  return new Intl.NumberFormat("en-BD", {
    style: 'currency',
    currency: "BDT",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};
