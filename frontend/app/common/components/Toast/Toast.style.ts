import type { VariantProps } from "cva";

import { cva } from "cva";

const toast = cva("rounded-md p-4", {
  variants: {
    intent: {
      info: "bg-blue-50 text-blue-700 [&_.icon-container]:text-blue-400",
      success: "bg-green-50 text-green-700 [&_.icon-container]:text-green-400",
      warning:
        "bg-yellow-50 text-yellow-700 [&_.icon-container]:text-yellow-400",
      error: "bg-red-50 text-red-700  [&_.icon-container]:text-red-400",
    },
  },
});

export type ToastVariantProps = VariantProps<typeof toast>;

export default toast;
