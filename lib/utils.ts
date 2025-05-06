import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [integerPart, decimalPart] = num.toString().split(".");
  return decimalPart ? `${integerPart}.${decimalPart.padEnd(2, '0')}` : integerPart;
}

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')       // Remove non-word, non-whitespace, non-hyphen
    .replace(/\s+/g, '-')           // Replace whitespace with hyphen
    .replace(/^-+|-+$/g, '');       // Trim leading/trailing hyphens
