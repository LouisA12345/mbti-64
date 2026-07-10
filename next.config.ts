import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server (and its HMR websocket) be reached through a tunnel
  // (e.g. `cloudflared tunnel --url http://localhost:3000`) instead of only localhost.
  allowedDevOrigins: ["*.trycloudflare.com", "*.ngrok-free.app", "*.ngrok.io"],
};

export default nextConfig;
