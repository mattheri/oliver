import type { ComponentProps, ElementType } from "react";

import { Menu, FocusTrap } from "@headlessui/react";
import { Float, type FloatProps } from "@headlessui-float/react";
import { HTMLAttributes, useMemo, Fragment, forwardRef, useState } from "react";
import type { ButtonIntents, ButtonSizes } from "../Button/Button.style";
import Button from "../Button/Button";
import { cx } from "cva";
import { twMerge } from "tailwind-merge";

type ItemOnClickProps = {
  label: string;
  value?: string;
  index?: number;
};

type Item = {
  label: string;
  value?: string;
  onClick?: (props: ItemOnClickProps) => void;
};

type Props = {
  label?: string;
  buttonIntent?: ButtonIntents;
  buttonSize?: ButtonSizes;
  items?: Item[];
  itemClassName?: string;
  itemActiveClassName?: string;
  itemElement?: ElementType;
  itemsClassName?: string;
  itemsOpenClassName?: string;
  itemsElement?: ElementType;
} & HTMLAttributes<HTMLDivElement>;

const Dropdown = forwardRef<HTMLElement, Props>(function Dropdown(
  {
    label,
    buttonIntent = "primary",
    buttonSize = "md",
    items = [],
    itemElement = "button",
    itemsElement = "div",
    itemClassName = "",
    itemActiveClassName = "",
    itemsClassName = "",
    itemsOpenClassName = "",
    ...props
  },
  ref,
) {
  const handleItemClick = (item: Item, index: number, close: () => void) => {
    item.onClick?.({
      label: item.label,
      value: item.value,
      index,
    });

    close();
  };
  const [placement, setPlacement] =
    useState<Required<FloatProps>["placement"]>("bottom-start");

  const Item = useMemo(() => itemElement, [itemElement]);
  const Items = useMemo(() => itemsElement, [itemsElement]);

  return (
    <Menu {...props} ref={ref}>
      {({ open, close }) => (
        <Float
          portal
          floatingAs={Fragment}
          as="div"
          className="relative"
          autoPlacement={{
            allowedPlacements: [
              "bottom-start",
              "bottom-end",
              "top-start",
              "top-end",
            ],
          }}
          middleware={[
            {
              fn: async ({ placement: floatPlacement, ...rest }) => {
                if (floatPlacement && floatPlacement !== placement) {
                  setPlacement(floatPlacement);
                }

                return {
                  placement: floatPlacement,
                  ...rest,
                };
              },
              name: "placement",
            },
          ]}
        >
          <Menu.Button as={Button} intent={buttonIntent} size={buttonSize}>
            {label}
          </Menu.Button>
          <Menu.Items
            as={Items}
            static
            className={twMerge(
              cx(
                "flex flex-col overflow-hidden rounded bg-white shadow",
                itemsClassName,
                {
                  [itemsOpenClassName]: open,
                  ["flex-col-reverse"]: placement.startsWith("top"),
                },
              ),
            )}
          >
            <FocusTrap className="contents">
              {items.map((item, index) => (
                <Menu.Item key={index} as={Fragment}>
                  {({ active }) => {
                    const onClick = () => handleItemClick(item, index, close);
                    const itemActiveClasses = twMerge(
                      "bg-indigo-600 text-white",
                      itemActiveClassName,
                    );

                    return (
                      <Item
                        className={twMerge(
                          cx("p-1 text-left", itemClassName, {
                            [itemActiveClasses]: active,
                          }),
                        )}
                        onClick={onClick}
                      >
                        {item.label}
                      </Item>
                    );
                  }}
                </Menu.Item>
              ))}
            </FocusTrap>
          </Menu.Items>
        </Float>
      )}
    </Menu>
  );
});

export default Dropdown;

export type DropdownProps = ComponentProps<typeof Dropdown>;

export type ItemOnClickHandler = (props: ItemOnClickProps) => void;
