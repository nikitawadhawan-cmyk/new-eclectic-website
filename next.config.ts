import type { NextConfig } from "next";

// On GitHub Pages the site is served from /<repo>/ , so the CI build sets
// BASE_PATH=/new-eclectic-website. Locally BASE_PATH is unset -> served at /.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Static HTML/CSS/JS export into ./out (no Node server needed for Pages).
  output: "export",
  basePath,
  // Emit /route/index.html so paths resolve on a static host.
  trailingSlash: true,
  // Pages can't run Next's image optimizer — serve images as-is.
  images: { unoptimized: true },
  // Exposed to the client so the Image wrapper can prefix /public asset paths
  // (unoptimized next/image doesn't apply basePath to the raw src).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
