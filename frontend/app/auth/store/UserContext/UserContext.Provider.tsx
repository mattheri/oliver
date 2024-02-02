import type { ReactNode } from "react";
import type { UserContextState } from "~/auth/types";

import UserContext from "./UserContext";

type Props = {
  children?: ReactNode;
} & UserContextState;

export default function UserContextProvider({
  user,
  isAuthenticated,
  children,
}: Props) {
  return (
    <UserContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </UserContext.Provider>
  );
}
