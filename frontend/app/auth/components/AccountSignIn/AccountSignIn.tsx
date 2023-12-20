import { Heading, Button } from "~/common";

export default function AccountSignIn() {
  return (
    <>
      <Heading as="h2" intent="h1">
        Create your account
      </Heading>
      <p>
        Already have an account?{" "}
        <Button to="/auth/login" intent="link">
          Sign in
        </Button>
      </p>
    </>
  );
}
