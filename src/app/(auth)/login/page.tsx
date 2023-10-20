import type { Metadata } from "next";

import { UserAuthForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "just fn do it.",
};

export default function AuthenticationPage() {
  return (
    <div className="mx-auto flex w-full flex-col space-y-6 pt-56 sm:w-[350px]">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <UserAuthForm />
    </div>
  );
}
