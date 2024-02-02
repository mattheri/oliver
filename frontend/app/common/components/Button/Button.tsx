import type { ButtonHTMLAttributes, ComponentProps, ForwardedRef } from "react";
import type { LinkProps } from "~/common/components/Link/Link";
import type { ButtonVariantProps } from "./Button.style";

import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

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

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button({ to, className, intent, size, ...props }, ref) {
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
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        />
      );
    }

    return (
      <button
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={twMerge(
          button({
            intent: intent ?? "primary",
            size: size ?? "md",
            className,
          }),
        )}
        {...(props as HtmlButtonProps)}
      />
    );
  },
);

export default Button;

export type ButtonProps = ComponentProps<typeof Button>;
