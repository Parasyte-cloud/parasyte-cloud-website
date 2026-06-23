# PArAsYtE cloud — Website

> Security · Intelligence · Control

The official marketing site for [PArAsYtE cloud](https://parasyte.cloud) — a self-hosted endpoint security platform combining EDR, RMM, and DLP built on bare-metal Kubernetes.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (book intro animation)

## Features

- 70vh snap-scroll page layout with book-opening intro
- Sticky navbar + sticky footer always visible within the 70vh window
- Interactive PArAsYtE Scanner (IP, domain, ASN, AWS recon)
- Responsive — keyboard, wheel, and touch navigation

## Pages

| # | Page | Description |
|---|------|-------------|
| 0 | Hero | Brand intro, key products, CTAs |
| 1 | Products | EDR, RMM, DLP, AWS Scanner, DevOps, Secure Comms |
| 2 | Scanner | Live interactive recon tool |
| 3 | Platform | Three-tier architecture diagram |
| 4 | PArA PIN | Secure messaging product |
| 5 | Infra | Full self-hosted stack overview |
| 6 | Contact | Access request + contact info |

## Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (`parasyte-cloud` org)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your GitHub repo
4. Set build config:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
5. Add environment variable: `NEXT_PUBLIC_SITE_URL=https://parasyte.cloud`
6. Point your `parasyte.cloud` domain DNS to Cloudflare Pages

## License

MIT — Built by Biola Lawal · [parasyte.cloud](https://parasyte.cloud)
