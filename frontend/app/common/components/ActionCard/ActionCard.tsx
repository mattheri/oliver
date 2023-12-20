import type { HTMLAttributes } from "react";
import type { LinkProps } from "~/common/components/Link/Link";
import type { Icon } from "~/types";

import { useNavigate } from "@remix-run/react";
import { twMerge } from "tailwind-merge";
import { cx } from "cva";

import Heading from "../Heading/Heading";
import If from "../If/If";
import Button from "../Button/Button";

type Props = {
  icon?: Icon;
  background?: string;
  heading?: string;
  description?: string;
  action?: () => any | Promise<any>;
  to?: LinkProps["to"];
} & HTMLAttributes<HTMLElement>;

export default function ActionCard({
  to,
  action,
  icon: Icon,
  background = "bg-blue-500",
  description,
  heading,
  className,
  ...props
}: Props) {
  const navigate = useNavigate();

  const onClick = async () => {
    if (action) {
      await action();
    }

    if (to) {
      navigate(to);
    }
  };

  return (
    <Button
      intent="unstyled"
      onClick={onClick}
      type="button"
      className="p-0"
      role="link"
    >
      <article {...props} className={twMerge("flow-root", className)}>
        <div className="focus-within:ring-indigo-500 hover:bg-gray-50 relative flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2">
          <If condition={!!Icon}>
            <If.Then>
              <div
                className={twMerge(
                  cx(
                    "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg",
                    { [background]: !!background },
                  ),
                )}
              >
                {Icon ? (
                  <Icon
                    className={twMerge(
                      cx("h-6 w-6", {
                        "text-white": !!background,
                      }),
                    )}
                  />
                ) : null}
              </div>
            </If.Then>
          </If>
          <div className="flex flex-grow flex-col items-start">
            <If condition={!!heading}>
              <If.Then>
                <Heading as="h3" intent="h6" className="text-left font-medium">
                  <span>{heading}</span>
                  <span aria-hidden="true"> &rarr;</span>
                </Heading>
              </If.Then>
            </If>
            <If condition={!!description}>
              <If.Then>
                <p className="text-sm text-gray-500 mt-1 text-left">
                  {description}
                </p>
              </If.Then>
            </If>
          </div>
        </div>
      </article>
    </Button>
  );
}
