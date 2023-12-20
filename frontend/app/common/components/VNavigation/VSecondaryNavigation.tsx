import type { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type Props = { title: string } & HTMLAttributes<HTMLElement>;

export default function VSecondaryNavigation({
  title,
  className,
  children,
  ...props
}: Props) {
  return (
    <nav {...props} className={twMerge("flex flex-1 flex-col", className)}>
      <span className="text-xs text-gray-400 font-semibold leading-6">
        {title}
      </span>
      <ul role="list" className="col-gap-2 flex flex-col">
        {children}
      </ul>
    </nav>
  );
}
