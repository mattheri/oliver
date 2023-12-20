import type { HTMLAttributes } from "react";

import If from "../If/If";

type Props = {
  cornerHint?: string;
  id?: string;
} & HTMLAttributes<HTMLElement>;

export default function InputCornerHint({ cornerHint, id, ...props }: Props) {
  return (
    <If condition={!!cornerHint}>
      <If.Then>
        <span {...props} className="text-sm text-gray-500 leading-6">
          {cornerHint}
        </span>
      </If.Then>
    </If>
  );
}
