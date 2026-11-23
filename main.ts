// Promote make.fun's make-your-own-bounty post on X — entry program.
//
// The entry itself is a post on X: a quote of make.fun's post
// (https://x.com/makefunai/status/2124915864336236646) with a photo of its
// own attached, the line "Make your own bounty on @makefunai:
// https://make.fun/sponsor/new" and one of this account's play codes
// (makefun-spinach-cradle-cape) in its text, posted from the public account
// @jembutirengx. POST.json at this repository's root names that post.
//
// All this program does is hand the address in: it copies POST.json from
// the repository (MAKEFUN_BOT_DIR, /bot in the grader) to the output
// directory (MAKEFUN_OUTPUT_DIR, /output in the grader), where the gate
// reads it. The house then reads the post itself from X and scores it by
// its replies + reposts + quotes; nothing written here about the post is
// scored.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate reads the address as X shows it: https://x.com/<handle>/status/<id>
// (or the same on twitter.com). A placeholder or a link to make.fun's own post
// can never score, so the program refuses it here instead of handing it in.
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

function readPostUrl(src: string): string {
  const parsed = JSON.parse(readFileSync(src, "utf8")) as { url?: unknown };
  if (typeof parsed.url !== "string" || !POST_URL.test(parsed.url)) {
    throw new Error(`POST.json does not name a post: ${String(parsed.url)}`);
  }
  if (parsed.url.includes("makefunai")) {
    throw new Error("POST.json names make.fun's post, not this entrant's own post");
  }
  return parsed.url;
}

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const src = join(BOT_DIR, "POST.json");
  const dst = join(OUTPUT_DIR, "POST.json");
  const url = readPostUrl(src);
  try {
    copyFileSync(src, dst);
  } catch (err) {
    console.error(`POST.json could not be copied from ${src}: ${(err as Error).message}`);
    process.exit(1);
  }
  console.log(`POST.json copied to ${dst}: ${url}`);
}

main();
