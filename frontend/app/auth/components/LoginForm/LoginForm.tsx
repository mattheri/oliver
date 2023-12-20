import { useFetcher } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import { Button, If, Input, Toast } from "~/common";
import ErrorCard from "~/common/components/ErrorCard/ErrorCard";

export default function LoginForm() {
  const fetcher = useFetcher<{ message?: string }>();
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const formError = (fetcher.state === "idle" && fetcher.data?.message) ?? null;

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
        type="password"
        label="Password"
        autoComplete="password"
        required
      />
      <If condition={!!formError}>
        <If.Then>
          <ErrorCard error={String(formError)} />
        </If.Then>
      </If>
      <Button type="submit" size="lg">
        Login
      </Button>
    </fetcher.Form>
  );
}
