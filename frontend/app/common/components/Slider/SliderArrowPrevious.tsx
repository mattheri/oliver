import type { ButtonHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  currentSlide?: number | undefined;
  slideCount?: number | undefined;
  additionalClassName?: string | undefined;
};

export default function SliderArrowNext({
  className,
  currentSlide,
  slideCount,
  additionalClassName,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      className={twMerge(
        "absolute left-1 top-1/2 z-1 h-fit w-fit -translate-y-1/2 rounded-full bg-white shadow-lg before:content-none hover:bg-white focus:bg-white focus:ring-1",
        className,
        additionalClassName,
      )}
    >
      <ArrowLeftIcon className="h-8 w-8 text-gray-500" aria-hidden="true" />
    </button>
  );
}
