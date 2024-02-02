import type { Icon } from "~/types";
import type { LinkProps } from "../Link/Link";

import { twMerge } from "tailwind-merge";
import { cx } from "cva";

import Link from "../Link/Link";
import If from "../If/If";

type Props = {
  current?: boolean;
  icon?: Icon;
  count?: number;
  name: string;
} & LinkProps;

export default function VNavigationItem({
  name,
  to,
  current,
  icon: Icon,
  count,
  className,
  ...props
}: Props) {
  return (
    <li>
      <Link
        {...props}
        to={to}
        className={twMerge(
          cx(
            "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
            { "bg-gray-50 text-indigo-600": current },
            {
              "text-gray-700 hover:bg-gray-50 hover:text-indigo-600": !current,
            },
          ),
          className,
        )}
      >
        <If condition={!!Icon}>
          <If.Then>
            {Icon ? (
              <Icon
                className={twMerge(
                  cx("h-6 w-6 shrink-0", {
                    "text-indigo-600": current,
                    "text-gray-400 group-hover:text-indigo-600": !current,
                  }),
                )}
                aria-hidden="true"
              />
            ) : null}
          </If.Then>
          <If.Else>
            <span
              className={twMerge(
                cx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium",
                  { "border-indigo-600 text-indigo-600": current },
                  {
                    "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600":
                      !current,
                  },
                ),
              )}
            >
              {name.slice(0, 1).toUpperCase()}
            </span>
          </If.Else>
        </If>
        <span className="flex-grow">{name}</span>
        <If condition={!!count}>
          <If.Then>
            <span
              className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
              aria-hidden="true"
            >
              {count}
            </span>
          </If.Then>
        </If>
      </Link>
    </li>
  );
}
