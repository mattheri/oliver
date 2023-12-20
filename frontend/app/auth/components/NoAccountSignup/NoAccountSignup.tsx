import { Heading, Button } from "~/common";

export default function NoAccountSignup() {
  return (
    <>
      <Heading as="h2" intent="h1">
        Sign in to your account
      </Heading>
      <p>
        Don't have an account?{" "}
        <Button to="/auth/signup" intent="link">
          Sign up
        </Button>
      </p>
    </>
  );
}
