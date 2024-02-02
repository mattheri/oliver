import { useLocation, useMatch, useRouteLoaderData } from "@remix-run/react";
import { RootData } from "~/types";
import HttpContext from "./HttpContext";
import { ReactNode, useEffect, useRef, useState, useMemo } from "react";

type Props = {
  children?: ReactNode;
};

export default function HttpContextProvider({ children }: Props) {
  const data = useRouteLoaderData<RootData>("root");
  const serverUrl = useMemo(() => new URL(data!.url), [data]);
  const location = useLocation();
  const [url, setUrl] = useState(serverUrl);

  useEffect(() => {
    const clientUrl = new URL(location.pathname, serverUrl.origin);
    Object.entries(location).forEach(([key, value]) => {
      // @ts-ignore
      clientUrl[key] = value;
    });
    setUrl(clientUrl);
  }, [location, serverUrl]);

  return (
    <HttpContext.Provider value={{ url }}>{children}</HttpContext.Provider>
  );
}
