import type { ComponentProps, HTMLAttributes } from "react";
import type { Modals } from "~/common";
import type { DrawerVariantProps } from "./Drawer.style";

import { Transition } from "@headlessui/react";

import { twMerge } from "tailwind-merge";

import Control from "./Control";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import Backdrop from "./Backdrop";

import { useModal } from "~/common/hooks/useModal";
import { drawer, getTransition } from "./Drawer.style";
import { useKeyboard } from "~/common/hooks/useKeyboard";

type Props = {
  modalId: Modals;
} & DrawerVariantProps &
  HTMLAttributes<HTMLElement>;

const Drawer = ({
  modalId,
  position,
  className,
  children,
  ...props
}: Props) => {
  const { isOpen, close } = useModal(modalId);
  useKeyboard({
    key: "Escape",
    fn: close,
  });

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={close} />
      <Transition
        {...getTransition(position ?? "right")}
        show={isOpen}
        as="aside"
        {...props}
        className={twMerge(
          drawer({ position: position ?? "right", className })
        )}
      >
        {children}
      </Transition>
    </>
  );
};

export type DrawerProps = ComponentProps<typeof Drawer>;

export default Object.assign(Drawer, { Control, Header, Body, Footer });
