import type { ToastContainerProps } from "react-toastify";

import { ToastContainer, Slide, toast } from "react-toastify";

const DEFAULT_TIMEOUT = 5000;
const DEFAULT_LIMIT = 3;
const DEFAULT_POSITION = toast.POSITION.TOP_RIGHT;
const DEFAULT_TRANSITION = Slide;
const DEFAULT_AUTO_CLOSE_ON_CLICK = false;

export default function ToastProvider({
  closeOnClick = DEFAULT_AUTO_CLOSE_ON_CLICK,
  limit = DEFAULT_LIMIT,
  autoClose = DEFAULT_TIMEOUT,
  transition = DEFAULT_TRANSITION,
  position = DEFAULT_POSITION,
  ...props
}: ToastContainerProps) {
  return (
    <ToastContainer
      {...props}
      closeOnClick={closeOnClick}
      limit={limit}
      autoClose={autoClose}
      transition={transition}
      position={position}
    />
  );
}
