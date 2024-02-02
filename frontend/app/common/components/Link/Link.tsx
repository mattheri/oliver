import type { LinkProps as RemixLinkProps } from "@remix-run/react";
import { forwardRef, type ComponentProps } from "react";

import { Link as RemixLink } from "@remix-run/react";

type Props = RemixLinkProps;

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { to, ...props }: Props,
  ref,
) {
  return <RemixLink ref={ref} to={to} {...props} />;
});

export default Link;

export type LinkProps = ComponentProps<typeof Link>;
