import type { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function SliderDot({ className, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        "!h-3 !w-3 rounded-full !p-0 !outline !outline-1 !outline-black transition-colors duration-300 before:!content-none [.slick-active_&]:bg-black",
        className,
      )}
    />
  );
}
