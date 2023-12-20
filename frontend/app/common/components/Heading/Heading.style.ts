import type { VariantProps } from "cva";

import { cva } from "cva";

export const heading = cva("font-semibold text-gray-900", {
  variants: {
    intent: {
      h1: "text-3xl mb-1",
      h2: "text-2xl mb-1",
      h3: "text-xl mb-1",
      h4: "text-lg mb-1",
      h5: "text-base mb-1",
      h6: "text-sm mb-1",
    },
  },
});

export type HeadingVariantProps = VariantProps<typeof heading>;
