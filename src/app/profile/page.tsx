import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { ProfileView } from "@/components/profile/profile-view";
import { getCurrentUsername } from "@/lib/server/user-auth";
import { getUserResults } from "@/lib/server/user-results-store";

export const metadata: Metadata = {
  title: "Your Profile | MBTI-64",
  robots: { index: false, follow: false },
};

// Cookie-gated; must never be statically prerendered.
export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const username = await getCurrentUsername();
  if (!username) {
    redirect("/login");
  }

  const results = await getUserResults(username);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <ProfileView username={username} results={results} />
    </div>
  );
}
