import { Action as DataAction } from "./AppContext/dataReducer";
import { Action as ModalAction } from "./AppContext/modalsReducer";

import type { ActionPayload as ModalsActionPayload } from "./AppContext/modalsReducer";
import type { ActionPayload as DataActionPayload } from "./AppContext/dataReducer";

export type { DataActionPayload, ModalsActionPayload };

export { DataAction, ModalAction };
