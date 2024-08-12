import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", { year: 'numeric', month: 'short', day: 'numeric' })
}

export function formatTime(date) {
  return new Date(date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true })
}