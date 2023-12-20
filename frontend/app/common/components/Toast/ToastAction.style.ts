import type { VariantProps } from "cva";

import { cva } from "cva";

const toastAction = cva(
  "rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        success:
          "bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50",
        warning:
          "bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50",
        error:
          "bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50",
        info: "bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50",
      },
    },
  },
);

export type ToastActionVariantProps = VariantProps<typeof toastAction>;

export default toastAction;
