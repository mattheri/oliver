export const MODALS = {
  MENU: "menu",
  LOGIN: "login",
} as const;

export type Modals = (typeof MODALS)[keyof typeof MODALS];
