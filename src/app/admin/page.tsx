import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { ADMIN_COOKIE_NAME, isAdminConfigured, isValidAdminSessionToken } from "@/lib/server/admin-auth";
import { getAllResults } from "@/lib/server/admin-log-store";
import { getKvStatus } from "@/lib/server/kv-client";

export const metadata: Metadata = {
  title: "Admin | MBTI-64",
  robots: { index: false, follow: false },
};

// This page gates access via a cookie check; it must never be statically prerendered
// (which would freeze whatever branch — configured/unconfigured, authed/not — happened to be
// true at build time) regardless of whether ADMIN_PASSWORD is set during the build.
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAdminConfigured()) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-4 py-20 text-center text-muted-foreground">
          Admin access isn&rsquo;t configured yet. Set an <code>ADMIN_PASSWORD</code> environment variable to enable it.
        </main>
      </div>
    );
  }

  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidAdminSessionToken(token))) {
    redirect("/admin/login");
  }

  const results = await getAllResults();
  const kvStatus = getKvStatus();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <AdminDashboard results={results} kvStatus={kvStatus} />
    </div>
  );
}
