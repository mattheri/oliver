import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Then({ children }: Props) {
  return children;
}
