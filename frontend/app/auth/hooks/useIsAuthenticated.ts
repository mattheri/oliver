import { useContext } from "react";

import UserContext from "../store/UserContext/UserContext";

export default function useIsAuthenticated() {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated;
}
