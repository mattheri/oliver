import type { LoaderArgs } from "@remix-run/node";
import { formAuthenticator } from "~/auth";
import { USER_ROUTES } from "~/common/constants/routes";

export async function loader({ request }: LoaderArgs) {
  await formAuthenticator.logout(request, {
    redirectTo: USER_ROUTES.LOGIN,
  });
}

export default function Logout() {
  return <div />;
}
