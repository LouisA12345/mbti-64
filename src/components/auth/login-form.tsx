"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSafeNextPath } from "@/lib/safe-redirect";
import { useT } from "@/lib/i18n/use-translations";

export function LoginForm() {
  const router = useRouter();
  const t = useT();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupHref, setSignupHref] = useState("/signup");

  // Preserve `?next=` across to the signup link too, so switching forms doesn't lose the
  // "come back here after auth" destination (e.g. from the /quiz login gate). Reading it via
  // an effect (rather than during render) keeps the first render identical on server and
  // client, since `window` doesn't exist during SSR.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const next = new URLSearchParams(window.location.search).get("next");
    if (next) setSignupHref(`/signup?next=${encodeURIComponent(next)}`);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? t("auth.somethingWrong"));
        return;
      }
      const next = getSafeNextPath(new URLSearchParams(window.location.search).get("next"));
      router.push(next);
      router.refresh();
    } catch {
      setError(t("auth.somethingWrongRetry"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-heading text-xl">
          <LogIn className="size-5 text-brand" />
          {t("auth.loginTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder={t("auth.usernamePlaceholder")} autoFocus />
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t("auth.passwordPlaceholder")} />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={!username || !password || loading}>
            {loading ? t("auth.loggingIn") : t("auth.submitLogin")}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            {t("auth.noAccount")}{" "}
            <Link href={signupHref} className="font-medium text-brand underline underline-offset-4">
              {t("auth.signUpLink")}
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
