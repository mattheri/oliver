import type { LinkProps as RemixLinkProps } from "@remix-run/react";
import type { ComponentProps } from "react";

import { Link as RemixLink } from "@remix-run/react";

type Props = RemixLinkProps;

export default function Link(props: Props) {
  return <RemixLink {...props} />;
}

export type LinkProps = ComponentProps<typeof Link>;
