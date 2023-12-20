import type { ReactNode } from "react";

import { Children } from "react";

import Then from "./Then";
import Else from "./Else";

type Props = {
  condition: boolean;
  children: ReactNode;
};

function findChildren(children: ReactNode, name: string) {
  return Children.toArray(children).find((child) => {
    if (typeof child === "object" && "type" in child) {
      if (typeof child.type === "function") {
        return child.type.name === name;
      }
    }

    return false;
  });
}

function If({ condition, children }: Props) {
  return condition
    ? findChildren(children, "Then")
    : findChildren(children, "Else") ?? null;
}

export default Object.assign(If, {
  Then: Then,
  Else: Else,
});
