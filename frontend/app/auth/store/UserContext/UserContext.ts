import { createContext } from "react";
import { UserContextState } from "~/auth/types";

const UserContext = createContext<UserContextState>({
  isAuthenticated: false,
});

export default UserContext;
