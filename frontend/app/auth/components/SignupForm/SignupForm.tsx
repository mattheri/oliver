import type { User } from "~/auth/types";

import { useFetcher } from "@remix-run/react";

import { Button, Input } from "~/common";

export default function SignupForm() {
  const fetcher = useFetcher<User>();

  return (
    <fetcher.Form
      action="/auth/actions"
      method="POST"
      className="row-gap-8 grid w-full grid-cols-1"
    >
      <Input
        type="email"
        id="email"
        label="Email"
        autoComplete="username"
        required
      />
      <Input
        helpText="Password must contain at least one letter and one number and have at least 8 characters"
        type="password"
        id="password"
        label="Password"
        autoComplete="new-password"
        required
      />
      <Input
        type="password"
        id="validatePassword"
        label="Re-type password"
        required
      />
      <Button type="submit" size="lg">
        Sign up
      </Button>
    </fetcher.Form>
  );
}
