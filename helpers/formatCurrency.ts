export default function formatCurrency(anmout: number): string {
  const formatedAnmout = anmout.toLocaleString("uk-UA", {
    currency: "UAH",
  });
  return `${formatedAnmout} ₴`;
}
