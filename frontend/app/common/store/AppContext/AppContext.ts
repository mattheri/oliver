import type { AppContextObject, DataState, ModalsState } from "~/common";

import { createContext } from "react";
import { MODALS } from "~/common/constants";

export const initialModalState = Object.keys(MODALS).reduce((acc, key) => {
  acc[MODALS[key as keyof typeof MODALS]] = false;
  return acc;
}, {} as ModalsState);

export const initialDataState: DataState = {
  recipes: [],
};

const AppContext = createContext<AppContextObject>({
  modals: {
    state: initialModalState,
    dispatch: () => {},
  },
  data: {
    state: initialDataState,
    dispatch: () => {},
  },
});

export default AppContext;
