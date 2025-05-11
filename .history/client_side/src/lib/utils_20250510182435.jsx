import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Fusionne proprement les classes CSS avec Tailwind
export function cn(...inputs) {
  return twMerge(clsx(...inputs))
}
