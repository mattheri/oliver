import type { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLElement>;

export default function Footer({ className, ...props }: Props) {
  return <footer className={twMerge("order-3", className)} {...props} />;
}
