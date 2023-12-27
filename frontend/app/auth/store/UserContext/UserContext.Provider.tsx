import type { ReactNode } from "react";
import type { UserContextState } from "~/auth/types";
import { USER_ROUTES } from "~/common/constants/routes";

import { useNavigate } from '@remix-run/react'

import UserContext from "./UserContext";

type Props = {
  children?: ReactNode;
} & UserContextState;

export default function UserContextProvider({
  user,
  isAuthenticated,
  children,
}: Props) {
  const navigate = useNavigate()

  if (!isAuthenticated) {
    navigate(USER_ROUTES.LOGIN)  
  }

  return (
    <UserContext.Provider
      value={{ isAuthenticated, user }}
    >
      {children}
    </UserContext.Provider>
  );
}
