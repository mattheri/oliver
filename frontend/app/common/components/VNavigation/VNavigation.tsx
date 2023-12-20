import type { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import VNavigationItem from "./VNavigationItem";
import VSecondaryNavigation from "./VSecondaryNavigation";

type Props = HTMLAttributes<HTMLElement>;

function VNavigation({ children, className, ...props }: Props) {
  return (
    <nav {...props} className={twMerge("flex flex-1 flex-col", className)}>
      <ul role="list" className="col-gap-2 flex flex-col">
        {children}
      </ul>
    </nav>
  );
}

export default Object.assign(VNavigation, {
  Item: VNavigationItem,
  Secondary: VSecondaryNavigation,
});
