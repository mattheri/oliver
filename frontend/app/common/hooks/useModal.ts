import type { Modals } from "~/common/constants/modals";

import { useCallback, useContext } from "react";
import AppContext from "../store/AppContext/AppContext";

export const useModal = (modalId: Modals) => {
  const { modals } = useContext(AppContext);
  const isOpen = modals.state[modalId];

  const open = useCallback(() => {
    modals.dispatch({ type: "OPEN_MODAL", payload: { modalId } });
  }, []);

  const close = useCallback(() => {
    modals.dispatch({ type: "CLOSE_MODAL", payload: { modalId } });
  }, []);

  return {
    isOpen,
    open,
    close,
  };
};
