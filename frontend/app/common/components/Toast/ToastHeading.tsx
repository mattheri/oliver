import type { HTMLAttributes } from "react";
import type { ToastHeadingVariantProps } from "./ToastHeading.style";

import { twMerge } from "tailwind-merge";

import toastHeading from "./ToastHeading.style";

type Props = HTMLAttributes<HTMLElement> & ToastHeadingVariantProps;

export default function ToastHeading({
  intent,
  className,
  children,
  ...props
}: Props) {
  return (
    <p
      {...props}
      className={twMerge(
        toastHeading({ intent: intent ?? "success", className }),
      )}
    >
      {children}
    </p>
  );
}
