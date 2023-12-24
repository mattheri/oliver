import { useForm } from "react-hook-form";
import type { User } from "~/auth/types";
import { Button, Input } from "~/common";

import { useFetcher } from "@remix-run/react";

export default function SignupForm() {
  const fetcher = useFetcher<User>();
  const { register } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  })

  return (
    <fetcher.Form
      action="/auth/actions"
      method="POST"
      className="row-gap-8 grid w-full grid-cols-1"
    >
      <Input
        {...register("email", { required: true })}
        type="email"
        label="Email"
        autoComplete="username"
        required
      />
      <Input
        {...register("password", { required: true })}
        helpText="Password must contain at least one letter and one number and have at least 8 characters"
        type="password"
        label="Password"
        autoComplete="new-password"
        required
      />
      <Input
        {...register("passwordConfirm", { required: true })}
        type="password"
        label="Re-type password"
        required
      />
      <Button type="submit" size="lg">
        Sign up
      </Button>
    </fetcher.Form>
  );
}
