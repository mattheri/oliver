import type { VariantProps } from "cva";

import { cva } from "cva";

const toastLink = cva("whitespace-nowrap font-medium", {
  variants: {
    intent: {
      info: "text-blue-700 hover:text-blue-600",
      success: "text-green-700 hover:text-green-600",
      warning: "text-yellow-700 hover:text-yellow-600",
      error: "text-red-700 hover:text-red-600",
    },
  },
});

export type ToastLinkVariantProps = VariantProps<typeof toastLink>;

export default toastLink;
