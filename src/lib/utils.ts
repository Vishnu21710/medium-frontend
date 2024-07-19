import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (string: string, truncateValue: number):string => {
  if(string.length > truncateValue){
    return `${string.substring(0,truncateValue)}...`
  }
  return string
};
