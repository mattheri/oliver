import type { Modals } from "~/common/constants/modals";
import type { HTMLAttributes } from "react";

import { cloneElement, Children, isValidElement } from "react";

import { useModal } from "~/common/hooks/useModal";

type Props = Omit<HTMLAttributes<HTMLElement>, "onClick"> & {
  modalId: Modals;
};

export default function Control({ modalId, children, ...props }: Props) {
  const { isOpen, close, open } = useModal(modalId);

  const Component = isValidElement(children) ? (
    Children.only(children)
  ) : (
    <div {...props}>{Children.only(children)}</div>
  );

  return children
    ? cloneElement(Component, {
        ...props,
        onClick: isOpen ? close : open,
      })
    : null;
}
