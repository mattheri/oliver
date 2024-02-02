import tailwind from "~/styles/tailwind.css";

import { cssBundleHref } from "@remix-run/css-bundle";
import { redirect, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { formAuthenticator } from "./auth";
import UserContextProvider from "./auth/store/UserContext/UserContext.Provider";
import {
  AppContextProvider,
  Menu,
  PROTECTED_ROUTES_ARRAY,
  ROUTES,
  USER_ROUTES,
} from "./common";
import recipesService from "./recipes/service/recipes.service";
import { RootData } from "./types";
import { createBearerAccessTokenHeader } from "./auth/utils/createBearerAccessTokenHeader";
import HttpContextProvider from "./http/store/HttpContext.Provider";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: tailwind },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
  },
];

export async function loader({ request }: LoaderArgs) {
  const user = await formAuthenticator.isAuthenticated(request);
  const recipes = await recipesService.getRecipesByUser({
    headers: await createBearerAccessTokenHeader(formAuthenticator, request),
  });
  const isAuthenticated = !!user;

  if (
    PROTECTED_ROUTES_ARRAY.includes(new URL(request.url).pathname) &&
    !isAuthenticated
  ) {
    return redirect(USER_ROUTES.LOGIN);
  }

  return {
    user,
    isAuthenticated,
    recipes,
    url: request.url,
  };
}

export default function App() {
  const { user, isAuthenticated, recipes } = useLoaderData<RootData>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-body text-black-900 flex flex-col">
        <HttpContextProvider>
          <AppContextProvider recipes={recipes}>
            <UserContextProvider isAuthenticated={isAuthenticated} user={user}>
              <Menu />
              <Outlet />
            </UserContextProvider>
          </AppContextProvider>
        </HttpContextProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// export const shouldRevalidate = () => false;
