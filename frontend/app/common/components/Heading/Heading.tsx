import type { HTMLAttributes } from "react";
import type { HeadingVariantProps } from "./Heading.style";

import { twMerge } from "tailwind-merge";

import { heading } from "./Heading.style";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadingElement> &
  HeadingVariantProps;

export default function Heading({
  className,
  intent,
  as: As = "h1",
  ...props
}: Props) {
  return (
    <As
      className={twMerge(heading({ intent: intent ?? "h1" }), className)}
      {...props}
    />
  );
}
