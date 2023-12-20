import type { VariantProps } from "cva";
import type { TransitionRootProps } from "@headlessui/react";

import { cva, cx } from "cva";

export const drawer = cva("bg-white flex flex-col fixed p-4 z-1", {
  variants: {
    position: {
      top: "top-0",
      bottom: "bottom-0",
      left: "left-0",
      right: "right-0",
    },
  },
  compoundVariants: [
    {
      position: ["top", "bottom"],
      className:
        "h-[min(400px,_100dvh)] left-0 overflow-y-auto overflow-x-hidden w-full",
    },
    {
      position: ["left", "right"],
      className:
        "h-full overflow-y-hidden overflow-x-auto w-[min(400px,_100%)] top-0",
    },
  ],
});

export const getTransition = (
  position: DrawerVariantProps["position"],
): Pick<
  TransitionRootProps<any>,
  "enterFrom" | "enter" | "leave" | "leaveFrom" | "leaveTo" | "enterTo"
> => {
  return {
    enterFrom: cx({
      "-translate-y-full": position === "top",
      "translate-y-full": position === "bottom",
      "-translate-x-full": position === "left",
      "translate-x-full": position === "right",
    }),
    enterTo: cx({
      "translate-y-0": position === "top",
      "-translate-y-0": position === "bottom",
      "translate-x-0": position === "left",
      "-translate-x-0": position === "right",
    }),
    enter: "transform-gpu transition-transform ease-default duration-default",
    leave: "transform-gpu transition-transform ease-default duration-default",
    leaveFrom: cx({
      "translate-y-0": position === "top",
      "-translate-y-0": position === "bottom",
      "translate-x-0": position === "left",
      "-translate-x-0": position === "right",
    }),
    leaveTo: cx({
      "-translate-y-full": position === "top",
      "translate-y-full": position === "bottom",
      "-translate-x-full": position === "left",
      "translate-x-full": position === "right",
    }),
  };
};

export type DrawerVariantProps = VariantProps<typeof drawer>;
