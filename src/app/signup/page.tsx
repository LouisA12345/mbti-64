import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Sign Up | MBTI-64",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-20">
        <SignupForm />
      </main>
    </div>
  );
}
