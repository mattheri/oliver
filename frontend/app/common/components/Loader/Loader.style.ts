import type { VariantProps } from "cva";

import { cva } from "cva";

const variants = cva("", {
  variants: {
    size: {
      default: "h-3 w-3",
      large: "h-5 w-5",
      huge: "h-10 w-10",
    },
    color: {
      blue: "text-blue-500",
      yellow: "text-yellow-500",
      red: "text-red-500",
      green: "text-green-500",
      white: "text-white",
    },
  },
});

export type LoaderVariantsProps = VariantProps<typeof variants>;

export default variants;
