import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server (and its HMR websocket) be reached through a tunnel
  // (e.g. `cloudflared tunnel --url http://localhost:3000`) instead of only localhost.
  allowedDevOrigins: ["*.trycloudflare.com", "*.ngrok-free.app", "*.ngrok.io"],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stops the browser from guessing content types away from what the server declares.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // This app never needs to be framed by another site.
          { key: "X-Frame-Options", value: "DENY" },
          // Don't leak full URLs (which can carry query params) to third-party destinations.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
