"use client";

import { useState } from "react";
import { Link2, Check, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportElementToPdf } from "@/lib/pdf";
import { toast } from "sonner";
import type { PersonalityProfile } from "@/lib/types";

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface ShareBarProps {
  profile: PersonalityProfile;
  captureElementId: string;
}

export function ShareBar({ profile, captureElementId }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [exporting, setExporting] = useState(false);

  const shareText = `I'm ${profile.code} — ${profile.title} on MBTI-64.`;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link — copy it from the address bar instead.");
    }
  }

  async function handleDownloadPdf() {
    setExporting(true);
    try {
      await exportElementToPdf(captureElementId, `${profile.code}-mbti64.pdf`);
    } catch {
      toast.error("PDF export failed. Please try again.");
    } finally {
      setExporting(false);
    }
  }

  function openShareWindow(url: string) {
    window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline" size="sm" onClick={handleCopyLink}>
        {copied ? <Check className="size-4" /> : <Link2 className="size-4" />}
        {copied ? "Copied" : "Copy Link"}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          openShareWindow(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`)
        }
      >
        <XLogo className="size-3.5" />
        Share
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`)}
      >
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`)
        }
      >
        LinkedIn
      </Button>
      <Button variant="default" size="sm" onClick={handleDownloadPdf} disabled={exporting}>
        {exporting ? <Loader2 className="size-4 animate-spin" /> : <Download className="size-4" />}
        {exporting ? "Preparing…" : "Download PDF"}
      </Button>
    </div>
  );
}
