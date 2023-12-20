import useIsAuthenticated from "~/auth/hooks/useIsAuthenticated";
import { VNavigation } from "~/common";
import { USER_ROUTES, USER_ROUTES_NAMES } from "~/common/constants/routes";

export default function AuthNavMenu() {
  const isAuthenticated = useIsAuthenticated();
  const routes = isAuthenticated
    ? { PROFILE: USER_ROUTES.PROFILE, LOG_OUT: USER_ROUTES.LOG_OUT }
    : { LOGIN: USER_ROUTES.LOGIN, SIGN_UP: USER_ROUTES.SIGN_UP };

  return (
    <VNavigation.Secondary title="Profile">
      {Object.entries(routes).map(([key, value]) => (
        <VNavigation.Item
          key={key}
          to={value}
          name={USER_ROUTES_NAMES[key as keyof typeof USER_ROUTES]}
        />
      ))}
    </VNavigation.Secondary>
  );
}
