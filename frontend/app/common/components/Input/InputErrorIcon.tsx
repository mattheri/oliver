import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import If from "../If/If";

type Props = {
  isError?: boolean;
};

export default function InputErrorIcon({ isError }: Props) {
  return (
    <If condition={!!isError}>
      <If.Then>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          />
        </div>
      </If.Then>
    </If>
  );
}
