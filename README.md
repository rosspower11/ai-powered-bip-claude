# AI Powered BIP100 × Claude — landing page

Exclusive cohort landing for **BIP100 members**. Fork of [aipowered-claudeOS-landing-page](https://github.com/rosspower11/aipowered-claudeOS-landing-page).

**Public cohort (non-members):** https://claude.aipowered.xyz/

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · single `app/globals.css`

## Customize

| File | What to change |
|------|----------------|
| `lib/cohort.ts` | Workshop dates, start time (countdown), signup form ID, `SIGNUP_URL` |
| `lib/site.ts` | Site URL, metadata, public cohort link |

## BIP100 cohort (current)

- **Workshops:** 6 × 90 min at **09:30 BST** — 10, 17, 24 Jun; 1, 8, 15 Jul 2026
- **No office hours** · **No pricing** — inline signup form only
- **CTA:** SIGN UP → `#signup` (LeadConnector form embed)
- **Countdown:** First workshop, 10 June 2026 09:30 BST

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to https://github.com/rosspower11/ai-powered-bip-claude and connect to Vercel. Update `SITE_URL` in `lib/site.ts`.
