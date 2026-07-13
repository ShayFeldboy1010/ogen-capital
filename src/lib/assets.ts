import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * True if a file exists in /public. Server-only helper used to render
 * graceful fallbacks (gradients, posters) until real media is dropped in,
 * and to auto-upgrade the moment it is.
 */
export function hasPublicAsset(file: string): boolean {
  try {
    return existsSync(join(process.cwd(), "public", file.replace(/^\//, "")));
  } catch {
    return false;
  }
}
