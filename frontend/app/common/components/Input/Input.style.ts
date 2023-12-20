import type { VariantProps } from "cva";

import { cva } from "cva";

export const input = cva(
  "isolate text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 invalid:ring-red-300 invalid:placeholder:text-red-300 focus:ring-2 focus:ring-inset invalid:focus:ring-red-500 disabled:cursor-not-allowed sm:leading-6",
);

export type InputProps = VariantProps<typeof input>;
