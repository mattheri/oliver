import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Else({ children }: Props) {
  return children;
}
