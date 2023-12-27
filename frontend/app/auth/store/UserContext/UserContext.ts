import { createContext } from "react";
import type { UserContextState } from "~/auth/types";

const UserContext = createContext<UserContextState>({
  isAuthenticated: false,
  user: null,
});

export default UserContext;
