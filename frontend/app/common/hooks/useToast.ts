import type { Id } from "react-toastify";

import { useRef } from "react";
import { toast } from "react-toastify";

export default function useToast() {
  let ref = useRef<Id>(null);

  return {
    id: ref.current,
    toast: (...args: Parameters<typeof toast>) => {
      ref = { current: toast(...args) };
    },
    promise: toast.promise,
  };
}
