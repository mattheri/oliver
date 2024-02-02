import { useContext } from "react";
import HttpContext from "../store/HttpContext";

/**
 * Returns an URL which is synced with the server and client.
 */
export default function useUrl() {
  const { url } = useContext(HttpContext);

  return new URL(url);
}
