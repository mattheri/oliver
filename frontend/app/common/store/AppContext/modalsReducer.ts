import type { ModalsState } from "~/common";

export const Action = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

export type ActionPayload =
  | { type: "OPEN_MODAL"; payload: { modalId: string } }
  | { type: "CLOSE_MODAL"; payload: { modalId: string } };

export default function modalsReducer(
  state: ModalsState,
  action: ActionPayload,
) {
  switch (action.type) {
    case Action.OPEN_MODAL:
      return {
        ...state,
        [action.payload.modalId]: true,
      };
    case Action.CLOSE_MODAL:
      return {
        ...state,
        [action.payload.modalId]: false,
      };
    default:
      throw new Error("Invalid action type");
  }
}
