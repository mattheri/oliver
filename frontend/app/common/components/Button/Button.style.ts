import type { VariantProps } from "cva";

import { cva } from "cva";

export const button = cva(
  "rounded font-semibold shadow-sm flex items-center justify-center gap-2",
  {
    variants: {
      intent: {
        primary:
          "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        secondary:
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        link: "shadow-none text-indigo-600 hover:text-indigo-500",
        unstyled: "shadow-none",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-2 py-1 text-sm",
        lg: "rounded-md px-2.5 py-1.5 text-sm",
        xl: "rounded-md px-3 py-2 text-sm",
      },
    },
    compoundVariants: [
      {
        intent: "link",
        className: "hover:underline text-base",
      },
    ],
  },
);

export type ButtonVariantProps = VariantProps<typeof button>;

export type ButtonIntents = ButtonVariantProps["intent"];

export type ButtonSizes = ButtonVariantProps["size"];
