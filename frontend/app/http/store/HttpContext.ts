import { createContext } from "react";
import { HttpContextState } from "../types";

const HttpContext = createContext<HttpContextState>({
  url: new URL("http://localhost:3000"),
});

export default HttpContext;
