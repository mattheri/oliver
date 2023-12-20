import type { LabelHTMLAttributes } from "react";

import If from "../If/If";

type Props = {
  label?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

export default function InputLabel({ label, ...props }: Props) {
  return (
    <If condition={!!label}>
      <If.Then>
        <label
          {...props}
          className="text-sm text-gray-900 block font-medium leading-6"
        >
          {label}
        </label>
      </If.Then>
    </If>
  );
}
