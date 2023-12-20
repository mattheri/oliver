import type { Modals as ModalId } from "~/common";
import type { ModalVariantProps } from "./Modal.style";
import type { HTMLAttributes } from "react";

import { Transition } from "@headlessui/react";

import { twMerge } from "tailwind-merge";

import Backdrop from "../Drawer/Backdrop";
import Header from "../Drawer/Header";
import Body from "../Drawer/Body";
import Footer from "../Drawer/Footer";
import Control from "../Drawer/Control";

import { useModal } from "~/common/hooks/useModal";
import { getTransition, modal } from "./Modal.style";
import { useKeyboard } from "~/common/hooks/useKeyboard";

type Props = {
  modalId: ModalId;
} & ModalVariantProps &
  HTMLAttributes<HTMLElement>;

function Modal({
  modalId,
  size,
  position,
  children,
  className,
  ...props
}: Props) {
  const { isOpen, close } = useModal(modalId);
  useKeyboard({ fn: close, key: "Escape" });

  return (
    <>
      <Backdrop isOpen={isOpen} onClose={close} />
      <Transition
        show={isOpen}
        {...getTransition(position ?? "center")}
        className={twMerge(
          modal({
            size: size ?? "default",
            position: position ?? "center",
            className,
          })
        )}
        as="div"
        {...props}
      >
        {children}
      </Transition>
    </>
  );
}

export default Object.assign(Modal, { Header, Body, Footer, Control });
