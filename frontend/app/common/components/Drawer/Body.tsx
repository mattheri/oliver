import type { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLElement>;

export default function Body({ className, ...props }: Props) {
  return (
    <section className={twMerge("flex-grow order-2", className)} {...props} />
  );
}
