import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
};

export const authFormSchema = () => {
  return z.object({
    username: z.string().min(8, "Username must be at least 8 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long")
  })
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};
