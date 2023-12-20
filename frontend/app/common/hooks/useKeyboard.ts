import { useCallback, useEffect } from "react";
import { keyboardRegistry } from "~/common/utils/KeyboardRegistry";

type UseKeyboardInit = {
  fn: (e: KeyboardEvent) => void;
  key?: KeyboardEvent["key"];
};

export const useKeyboard = ({ fn, key }: UseKeyboardInit) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (key && event.key === key) {
        return keyboardRegistry.emit(key, event);
      }

      return fn(event);
    },
    [fn, key]
  );

  useEffect(() => {
    if (key) {
      keyboardRegistry.register(key, fn);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (key) {
        keyboardRegistry.unregister(key, fn);
      }
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [fn, key]);
};
