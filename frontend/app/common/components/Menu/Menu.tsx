import { MODALS } from "~/common/constants/modals";
import Drawer from "../Drawer/Drawer";
import Button from "../Button/Button";
import { MdMenu, MdClose } from "react-icons/md";
import { VNavigation, If, useModal } from "~/common";
import { useLocation } from "@remix-run/react";
import { ROUTES, ROUTES_NAMES, USER_ROUTES } from "~/common/constants/routes";
import AuthNavMenu from "~/auth/components/AuthNavMenu/AuthNavMenu";

export default function Menu() {
  const location = useLocation();
  const canRender = ![
    USER_ROUTES.LOGIN,
    USER_ROUTES.SIGN_UP,
    USER_ROUTES.LOG_OUT,
  ].some((route) => location.pathname === route);
  const { close } = useModal(MODALS.MENU);

  return (
    <If condition={canRender}>
      <If.Then>
        <Drawer.Control modalId={MODALS.MENU}>
          <Button intent="unstyled" className="fixed left-4 top-4">
            <MdMenu size="2rem" />
          </Button>
        </Drawer.Control>
        <Drawer modalId={MODALS.MENU} position="left">
          <Drawer.Header>
            <Drawer.Control modalId={MODALS.MENU}>
              <Button intent="unstyled">
                <MdClose size="1rem" />
              </Button>
            </Drawer.Control>
          </Drawer.Header>
          <Drawer.Body>
            <VNavigation>
              {Object.entries(ROUTES).map(([key, value]) => (
                <VNavigation.Item
                  key={key}
                  to={value}
                  name={ROUTES_NAMES[key as keyof typeof ROUTES]}
                  onClick={close}
                />
              ))}
            </VNavigation>
            <AuthNavMenu />
          </Drawer.Body>
        </Drawer>
      </If.Then>
    </If>
  );
}
