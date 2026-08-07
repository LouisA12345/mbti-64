"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ResetPasswordDialogProps {
  username: string | null;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

/** Admin-forced password reset. There is deliberately no way to view an account's existing
 * password here — passwords are stored as one-way hashes, so there's no original value to show;
 * this sets a brand-new one instead. */
export function ResetPasswordDialog({ username, onOpenChange, onSuccess }: ResetPasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      setPassword("");
      setError("");
      setLoading(false);
    }
  }

  async function handleReset() {
    if (!username) return;
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      handleOpenChange(false);
      onSuccess();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={username !== null} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reset password for {username}</DialogTitle>
          <DialogDescription>
            Sets a brand-new password for this account. Share it with {username} yourself — there&rsquo;s no way to see
            their current password, since it&rsquo;s never stored in a reversible form.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password (min. 8 characters)"
            autoFocus
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={handleReset} disabled={password.length < 8 || loading}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            Reset Password
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
