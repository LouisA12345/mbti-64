import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Log In | MBTI-64",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-4 py-20">
        <LoginForm />
      </main>
    </div>
  );
}
