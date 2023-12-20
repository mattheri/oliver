import { SignupForm, AccountSignIn } from "~/auth";

export default function Index() {
  return (
    <main className="from-indigo-600 grid min-h-screen w-full grid-cols-1 place-items-center bg-gradient-to-bl lg:place-items-start">
      <section className="flex h-full w-full max-w-xl flex-col justify-center bg-white p-8">
        <div className="py-8">
          <AccountSignIn />
        </div>
        <SignupForm />
      </section>
    </main>
  );
}
