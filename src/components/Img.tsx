import NextImage, { type ImageProps } from "next/image";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an absolute /public asset path with the deploy basePath. Use for raw
 *  <img>/href references (next/image users get this via the wrapper below). */
export function assetPath(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}

/**
 * next/image wrapper that prepends the deploy basePath to absolute public asset
 * paths. With `images: { unoptimized: true }` (required for a static export),
 * next/image does NOT apply basePath to a raw string src, so images under
 * /public would 404 when the site is served from /<repo>/ on GitHub Pages.
 */
export default function Image({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/") ? `${BASE_PATH}${src}` : src;
  return <NextImage src={resolved} {...props} />;
}
