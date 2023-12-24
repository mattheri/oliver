import type { ReactNode } from "react";
import type { UserContextState } from "~/auth/types";

import UserContext from "./UserContext";

type Props = {
  children?: ReactNode;
} & UserContextState;

export default function UserContextProvider({
  id,
  email,
  name,
  provider,
  isAuthenticated,
  children,
}: Props) {
  return (
    <UserContext.Provider
      value={{ isAuthenticated, email, id, name, provider }}
    >
      {children}
    </UserContext.Provider>
  );
}
