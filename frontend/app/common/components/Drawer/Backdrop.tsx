import type { HTMLAttributes } from "react";

import { Transition } from "@headlessui/react";

type Props = HTMLAttributes<HTMLElement> & {
  isOpen: boolean;
  onClose: () => void;
};

export default function Backdrop({
  className,
  isOpen,
  onClose,
  ...props
}: Props) {
  return (
    <Transition
      show={isOpen}
      enterFrom="opacity-0"
      enter="opacity-100"
      leaveFrom="opacity-100"
      leave="opacity-0"
      as="div"
      className="bg-black fixed left-0 top-0 z-1 h-full w-full transform bg-opacity-40 backdrop-blur-[2px] duration-default ease-default"
      onClick={onClose}
      {...props}
    />
  );
}
