import type { HTMLAttributes, ReactNode } from "react";
import type { ToastOptions } from "react-toastify";
import type { ToastVariantProps } from "./Toast.style";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { twMerge } from "tailwind-merge";

import If from "../If/If";
import ToastAction from "./ToastAction";
import ToastHeading from "./ToastHeading";
import ToastLink from "./ToastLink";

import toast from "./Toast.style";
import ToastProvider from "./ToastProvider";

type Props = HTMLAttributes<HTMLElement> &
  ToastVariantProps & {
    icon?: ReactNode;
    displayClose?: boolean;
    toastProps?: ToastOptions;
    closeToast?: () => void;
  };

function Toast({
  intent,
  className,
  children,
  icon,
  toastProps,
  closeToast,
  displayClose = true,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={twMerge(toast({ intent: intent ?? "success", className }))}
    >
      <div className="flex">
        <If condition={!!icon}>
          <If.Then>
            <div className="icon-container flex-shrink-0">{icon}</div>
          </If.Then>
        </If>
        <div className="flex flex-grow flex-col gap-2">{children}</div>
        <If condition={!!displayClose}>
          <If.Then>
            <ToastAction
              className="flex-shrink-0 self-start"
              intent={intent ?? "success"}
              onClick={closeToast}
            >
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </ToastAction>
          </If.Then>
        </If>
      </div>
    </div>
  );
}

export default Object.assign(Toast, {
  Action: ToastAction,
  Heading: ToastHeading,
  Link: ToastLink,
  Provider: ToastProvider,
});
