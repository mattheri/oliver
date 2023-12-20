import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SliderDotsContainer({ children }: Props) {
  return (
    <ul className="scrollbar-hide flex w-full justify-center gap-4 overflow-y-hidden overflow-x-scroll py-[3px] [&_li]:h-4 [&_li]:w-4">
      {children}
    </ul>
  );
}
