import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techIconMap } from "@/constants/techIconMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (technology: string) => {
  const techName = technology.replace(/[ .]/g, "").toLowerCase();

  return techIconMap[techName]
    ? `${techIconMap[techName]} colored`
    : "devicon-devicon-plain";
};

export const getTimestamp = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: Record<string, number> = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
