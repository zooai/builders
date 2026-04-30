# LLM.md - Zoo Builders

**Last Updated**: 2026-04-29

## Overview
Zoo Builders is the developer portal for Zoo Network — a decentralized AI research
chain in the Lux multi-chain ecosystem. Lives at https://zoo.builders.

This site was forked from `~/work/lux/build` but rebuilt as a minimal static
landing page because the upstream Lux portal carried a heavy SSR stack (NextAuth,
Prisma, AI SDK, MCP server, hackathons console) incompatible with Cloudflare
Pages static export. The intent of the portal is marketing + links into the
canonical Zoo docs at https://zoo.ngo/docs/, not a full app.

## Tech Stack
- **Framework**: Next.js 15 (App Router) with `output: 'export'`
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Hosting**: Cloudflare Pages, project `zoo-builders`
- **Domains**: `zoo.builders` apex + `www.zoo.builders`

## Build & Deploy
```bash
pnpm install
pnpm build
# → emits static site to ./out
npx wrangler@4 pages deploy out --project-name zoo-builders --branch main
```

## Network Reference
| Network | Chain ID | Coin |
|---------|----------|------|
| Zoo mainnet | 200200 | ZOO |
| Zoo testnet | 200201 | ZOO |
| Zoo devnet | 200202 | ZOO |

Zoo runs as an L1 on Lux Network L0 consensus. See `~/work/lux/universe/LLM.md`.

## Rules for AI Assistants
1. Keep this site minimal — link out to canonical sources rather than duplicating content
2. Never re-add NextAuth, Prisma, or server APIs — the site is static-export only
3. Update LLM.md with any structural change
4. All canonical Zoo docs live at https://zoo.ngo/docs/ — link there, do not copy
