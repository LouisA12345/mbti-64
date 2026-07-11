"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";

export function AuthNav() {
  const router = useRouter();
  // undefined = still checking, null = logged out, string = logged in as this username.
  const [username, setUsername] = useState<string | null | undefined>(undefined);

  // Auth state lives server-side behind an HttpOnly cookie, unreadable from client JS, so the
  // first render must stay in a neutral "checking" state on both server and client and resolve
  // for real post-mount via this fetch.
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => (res.ok ? res.json() : { username: null }))
      .then((data) => setUsername(data.username ?? null))
      .catch(() => setUsername(null));
  }, []);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUsername(null);
    router.push("/");
    router.refresh();
  }

  if (username === undefined) {
    return <span className="hidden size-8 sm:inline-block" />;
  }

  if (username) {
    return (
      <>
        <Link
          href="/profile"
          className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          <User className="size-3.5" />
          {username}
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
        >
          <LogOut className="size-3.5" />
          Log Out
        </button>
      </>
    );
  }

  return (
    <>
      <Link
        href="/login"
        className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
      >
        Log In
      </Link>
      <Link
        href="/signup"
        className="hidden rounded-md bg-gradient-brand px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-block"
      >
        Sign Up
      </Link>
    </>
  );
}
