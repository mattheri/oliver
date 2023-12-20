import type { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLElement>;

export default function Header({ className, ...props }: Props) {
  return <header className={twMerge("order-1", className)} {...props} />;
}
