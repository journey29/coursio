import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: string | null) => {
  if (price === null) return 0;

  const currencyIndex = price.length - 1;
  const convertedPrice = price.slice(0, currencyIndex);

  return parseInt(convertedPrice);
};
