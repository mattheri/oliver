import type { ToastLinkVariantProps } from "./ToastLink.style";

import { twMerge } from "tailwind-merge";

import { Link } from "~/common";
import toastLink from "./ToastLink.style";

type Props = ToastLinkVariantProps & Parameters<typeof Link>[0];

export default function ToastLink({ intent, className, ...props }: Props) {
  return (
    <Link
      {...props}
      className={twMerge(toastLink({ intent: intent ?? "success", className }))}
    />
  );
}
