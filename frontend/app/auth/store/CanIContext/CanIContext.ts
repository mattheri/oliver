import { createContext } from "react";
import type { CanIContextState } from "~/auth/types";

const CanIContext = createContext<CanIContextState>({
	canI: null,
})

export default CanIContext;