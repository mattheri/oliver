import type { ReactNode } from "react";

import { If, Loader } from "~/common";

type Props = {
  loading: boolean;
  error?: Error;
  children?: ReactNode;
};

export default function HttpState({ loading, error, children }: Props) {
  return (
    <If condition={!!error}>
      <If.Then>
        <div>{error?.message}</div>
      </If.Then>
      <If.Else>
        <If condition={loading}>
          <If.Then>
            <Loader show={loading} />
          </If.Then>
          <If.Else>{children}</If.Else>
        </If>
      </If.Else>
    </If>
  );
}
