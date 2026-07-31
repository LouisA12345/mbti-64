"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";
import { useT } from "@/lib/i18n/use-translations";

interface AuthNavProps {
  /** "desktop" (default) hides itself below the sm breakpoint, for the horizontal header nav.
   * "mobile" is always visible with full-width stacked styling, for use inside the mobile sheet. */
  variant?: "desktop" | "mobile";
  onNavigate?: () => void;
}

export function AuthNav({ variant = "desktop", onNavigate }: AuthNavProps) {
  const router = useRouter();
  const t = useT();
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
    onNavigate?.();
    router.push("/");
    router.refresh();
  }

  if (username === undefined) {
    return variant === "mobile" ? null : <span className="hidden size-8 sm:inline-block" />;
  }

  if (variant === "mobile") {
    const linkClass =
      "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";
    return (
      <div className="flex flex-col gap-1">
        {username ? (
          <>
            <Link href="/profile" onClick={onNavigate} className={linkClass}>
              <User className="size-3.5" />
              {username}
            </Link>
            <button type="button" onClick={handleLogout} className={linkClass}>
              <LogOut className="size-3.5" />
              {t("nav.logOut")}
            </button>
          </>
        ) : (
          <>
            <Link href="/login" onClick={onNavigate} className={linkClass}>
              {t("nav.logIn")}
            </Link>
            <Link
              href="/signup"
              onClick={onNavigate}
              className="rounded-md bg-gradient-brand px-3 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t("nav.signUp")}
            </Link>
          </>
        )}
      </div>
    );
  }

  // Desktop: direct flex-item children of the header's <nav>, each hidden below sm.
  const desktopLinkClass =
    "hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex";

  if (username) {
    return (
      <>
        <Link href="/profile" className={desktopLinkClass}>
          <User className="size-3.5" />
          {username}
        </Link>
        <button type="button" onClick={handleLogout} className={desktopLinkClass}>
          <LogOut className="size-3.5" />
          {t("nav.logOut")}
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
        {t("nav.logIn")}
      </Link>
      <Link
        href="/signup"
        className="hidden rounded-md bg-gradient-brand px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-block"
      >
        {t("nav.signUp")}
      </Link>
    </>
  );
}
