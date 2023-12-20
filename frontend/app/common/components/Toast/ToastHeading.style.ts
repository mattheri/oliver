import type { VariantProps } from "cva";

import { cva } from "cva";

const toastHeading = cva("font-medium text-sm", {
  variants: {
    intent: {
      info: "text-blue-800",
      success: "text-green-800",
      warning: "text-yellow-800",
      error: "text-red-800",
    },
  },
});

export type ToastHeadingVariantProps = VariantProps<typeof toastHeading>;

export default toastHeading;
