import type { Dispatch, ReactNode } from "react";
import type { Modals } from "~/common";
import type { ActionPayload as ModalActionPayload } from "~/common/store/AppContext/modalsReducer";
import type { Recipe } from "~/recipes/types";
import type { ActionPayload as DataActionPayload } from "./store/AppContext/dataReducer";

export type QueueObject = {
  uuid: string;
  timeout: number;
  element: ReactNode;
};

export type AppContextObject = {
  modals: {
    state: ModalsState;
    dispatch: Dispatch<ModalActionPayload>;
  };
  data: {
    state: DataState;
    dispatch: Dispatch<DataActionPayload>;
  };
};

export type ModalsState = {
  [K in Modals]: boolean;
};

export type DataState = {
  recipes: Recipe[];
};
