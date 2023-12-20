import type { ReactNode } from "react";
import type { DataState } from "~/common/types";

import { useReducer } from "react";

import AppContext, { initialDataState, initialModalState } from "./AppContext";
import modalsReducer from "./modalsReducer";
import dataReducer from "./dataReducer";

type Props = {
  children?: ReactNode;
} & Partial<DataState>;

export default function AppContextProvider({ children, recipes = [] }: Props) {
  const [modalsState, dispatchModalsState] = useReducer(
    modalsReducer,
    initialModalState,
  );
  const [dataState, dispatchDataState] = useReducer(dataReducer, {
    ...initialDataState,
    recipes,
  });

  return (
    <AppContext.Provider
      value={{
        modals: { state: modalsState, dispatch: dispatchModalsState },
        data: { state: dataState, dispatch: dispatchDataState },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
