import type {
  InputHTMLAttributes,
  ReactNode,
  ForwardedRef,
  PropsWithRef,
} from "react";
import type { InputProps } from "./Input.style";

import { forwardRef } from "react";
import { cx } from "cva";
import { twMerge } from "tailwind-merge";

import InputLabel from "./InputLabel";
import InputHelperText from "./InputHelperText";
import InputCornerHint from "./InputCornerHint";
import InputLeadingContainer from "./InputLeadingContainer";
import InputTrailingContainer from "./InputTrailingContainer";

import { input } from "./Input.style";

export type Props = PropsWithRef<
  {
    label?: string;
    helpText?: string;
    cornerHint?: string;
    leading?: ReactNode;
    leadingContainerProps?: InputHTMLAttributes<HTMLElement>;
    trailing?: ReactNode;
    trailingContainerProps?: InputHTMLAttributes<HTMLElement>;
  } & InputHTMLAttributes<HTMLInputElement> &
    InputProps
>;

export default forwardRef(function Input(
  {
    label,
    helpText,
    id,
    name,
    type,
    cornerHint,
    leading,
    leadingContainerProps,
    trailing,
    trailingContainerProps,
    className,
    placeholder,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const nameOrId = name ?? id;

  return (
    <div>
      <div className="flex justify-between">
        <InputLabel htmlFor={nameOrId} label={label} />
        <InputCornerHint cornerHint={cornerHint} />
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <InputLeadingContainer {...leadingContainerProps}>
          {leading}
        </InputLeadingContainer>
        <input
          ref={ref}
          type={type ?? "text"}
          name={nameOrId}
          id={nameOrId}
          className={twMerge(
            input({
              className: cx({ "pl-10": !!leading, "pr-10": !!trailing }),
            }),
            className,
          )}
          placeholder={placeholder}
          aria-describedby={`${nameOrId}-description`}
          {...props}
        />
        <InputTrailingContainer {...trailingContainerProps}>
          {trailing}
        </InputTrailingContainer>
      </div>
      <InputHelperText helperText={helpText} id={nameOrId} />
    </div>
  );
});
