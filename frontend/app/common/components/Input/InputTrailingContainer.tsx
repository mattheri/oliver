import type { ReactNode, HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import If from "../If/If";

type Props = {
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function InputTrailingContainer({
  children,
  className,
  ...props
}: Props) {
  return (
    <If condition={!!children}>
      <If.Then>
        <div
          {...props}
          className={twMerge(
            "absolute inset-y-0 right-0 flex items-center pr-3",
            className,
          )}
        >
          {children}
        </div>
      </If.Then>
    </If>
  );
}
