import type { VariantProps } from "cva";
import type { TransitionRootProps } from "@headlessui/react";

import { cva, cx } from "cva";

export const modal = cva(
  "fixed bg-white flex flex-col shadow-md rounded-md overflow-y-auto overflow-x-hidden p-4",
  {
    variants: {
      size: {
        default: "w-[min(600px,_100%)] min-h-[1px] max-h-[100%]",
        full: "w-full h-full",
      },
      position: {
        center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        top: "top-4 left-1/2 transform -translate-x-1/2",
        bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
      },
    },
  }
);

export const getTransition = (
  position: ModalVariantProps["position"]
): Pick<
  TransitionRootProps<any>,
  "enterFrom" | "enter" | "leave" | "leaveFrom" | "leaveTo" | "enterTo"
> => {
  return {
    enter: "transform-gpu transition ease-default duration-default",
    enterFrom: "opacity-0 translate-y-4",
    enterTo: cx("opacity-100", {
      "translate-y-0": position === "bottom" || position === "top",
      "-translate-y-1/2": position === "center",
    }),
    leave: "transform-gpu transition ease-default duration-default",
    leaveFrom: cx("opacity-100", {
      "translate-y-0": position === "bottom" || position === "top",
      "-translate-y-1/2": position === "center",
    }),
    leaveTo: "opacity-0 translate-y-4",
  };
};

export type ModalVariantProps = VariantProps<typeof modal>;
