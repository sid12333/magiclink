export const devices = ["trackpad", "mouse", "keyboard"] as const;
export type Device = typeof devices[number];
export const terms = [1, 2, 3] as const;
export type Term = typeof terms[number];
export const unitPrices: Record<Term, number> = { 1: 2000, 2: 3600, 3: 4800 };

/** Display-only pricing for the product website. */
export function licenseQuote(selected: readonly string[], years: number) {
  if (!terms.includes(years as Term) || selected.length === 0 || new Set(selected).size !== selected.length || selected.some((d) => !devices.includes(d as Device))) {
    throw new Error("Choose distinct supported devices and a supported license term.");
  }
  const ordered = devices.filter((device) => selected.includes(device));
  const subtotalCents = unitPrices[years as Term] * ordered.length;
  const bundleDiscountPercent = ordered.length === 3 ? 25 : ordered.length === 2 ? 15 : 0;
  const totalCents = Math.round(subtotalCents * (100 - bundleDiscountPercent) / 100);
  return {
    devices: ordered,
    years: years as Term,
    originalCents: unitPrices[1] * years * ordered.length,
    termDiscountPercent: years === 3 ? 20 : years === 2 ? 10 : 0,
    termSavingsCents: unitPrices[1] * years * ordered.length - subtotalCents,
    subtotalCents,
    bundleDiscountPercent,
    savingsCents: subtotalCents - totalCents,
    totalCents,
    currency: "usd",
  };
}
