import { useCallback, useRef } from "react";

export default function useInvalidateForm() {
  const ref = useRef<HTMLFormElement>(null);

  const invalidate = useCallback(
    (message?: string) => {
      if (ref.current) {
        [...ref.current.elements].forEach((el) => {
          if (
            "setCustomValidity" in el &&
            typeof el.setCustomValidity === "function" &&
            "reportValidity" in el &&
            typeof el.reportValidity === "function"
          ) {
            el.setCustomValidity(message || "Invalid Input");
            el.reportValidity();
            el.setCustomValidity("");
            el.reportValidity();
          }
        });
      }
    },
    [ref],
  );

  return {
    ref,
    invalidate,
  };
}
