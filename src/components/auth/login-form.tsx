"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getSafeNextPath } from "@/lib/safe-redirect";

export function LoginForm() {
  const router = useRouter();
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
        setError(data.error ?? "Something went wrong.");
        return;
      }
      const next = getSafeNextPath(new URLSearchParams(window.location.search).get("next"));
      router.push(next);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-heading text-xl">
          <LogIn className="size-5 text-brand" />
          Log In
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoFocus />
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={!username || !password || loading}>
            {loading ? "Checking…" : "Log In"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Don&rsquo;t have an account?{" "}
            <Link href={signupHref} className="font-medium text-brand underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
