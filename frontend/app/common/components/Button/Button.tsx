import type { ButtonHTMLAttributes, ComponentProps } from "react";
import type { LinkProps } from "~/common/components/Link/Link";
import type { ButtonVariantProps } from "./Button.style";

import { twMerge } from "tailwind-merge";

import Link from "~/common/components/Link/Link";

import { button } from "./Button.style";

type LinkPropsWithoutTo = Omit<LinkProps, "to">;
type HtmlButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type UnstyledProps =
  | ({
      to?: never;
    } & HtmlButtonProps)
  | ({
      to: LinkProps["to"];
    } & LinkPropsWithoutTo);

type Props = UnstyledProps & ButtonVariantProps;

export default function Button({
  to,
  className,
  intent,
  size,
  ...props
}: Props) {
  if (to) {
    return (
      <Link
        to={to}
        className={twMerge(
          button({
            intent: intent ?? "primary",
            size: size ?? "md",
            className,
          }),
        )}
        {...(props as LinkPropsWithoutTo)}
      />
    );
  }

  return (
    <button
      className={twMerge(
        button({ intent: intent ?? "primary", size: size ?? "md", className }),
      )}
      {...(props as HtmlButtonProps)}
    />
  );
}

export type ButtonProps = ComponentProps<typeof Button>;
