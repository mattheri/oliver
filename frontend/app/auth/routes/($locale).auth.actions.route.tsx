import type { ActionArgs } from "@remix-run/node";

import { json } from "@remix-run/node";
import { AuthorizationError } from "remix-auth";

import { PROVIDER, formAuthenticator } from "~/auth";
import { ROUTES } from "~/common/constants/routes";

export async function action({ request }: ActionArgs) {
  try {
    await formAuthenticator.authenticate(PROVIDER.LOCAL, request, {
      successRedirect: ROUTES.INDEX,
    });
  } catch (e) {
    if (e instanceof Response) {
      return e;
    }

    if (e instanceof AuthorizationError) {
      const error = e as AuthorizationError;
      console.error(error);

      return json({ message: error.message });
    }
  }
}
