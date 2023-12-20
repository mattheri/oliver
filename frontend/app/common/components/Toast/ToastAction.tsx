import type { ButtonHTMLAttributes } from "react";
import type { ToastActionVariantProps } from "./ToastAction.style";

import { twMerge } from "tailwind-merge";

import toastAction from "./ToastAction.style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ToastActionVariantProps;

export default function ToastAction({
  intent,
  className,
  children,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      {...props}
      type={type}
      className={twMerge(
        toastAction({ intent: intent ?? "success", className }),
      )}
    >
      {children}
    </button>
  );
}
