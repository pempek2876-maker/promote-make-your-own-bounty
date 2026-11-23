# Promote: Make Your Own Bounty on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/pempek2876-maker/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/pempek2876-maker/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun competition **Promote make.fun's make-your-own-bounty post on X**
(https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post on X that quotes
make.fun's post, carries a photo of its own, the line "Make your own bounty on
@makefunai: https://make.fun/sponsor/new" and this account's play code in its text.
Places go by the post's replies + reposts + quotes; the top 50 share $250.

## The post

https://x.com/jembutirengx/status/2124953317537390644 — a quote of
https://x.com/makefunai/status/2124915864336236646 from the public account
@jembutirengx, posted 24 November 2026, with its own photo attached and the
play code `makefun-spinach-cradle-cape` in its text.

## What the program does

`POST.json` at the root names the post. `main.ts` copies `POST.json` from the
repository to `/output/POST.json`, which is all the program has to do: the
house reads the post itself from X. Run it locally with
`mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
