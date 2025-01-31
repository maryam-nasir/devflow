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
