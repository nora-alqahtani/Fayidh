# Fayidh — Phase 4 Starter

A React + Vite **scaffold**, based on the folder layout of the supplied `fayidh(1).zip`. It is **not** the finished marketplace. All feature pages are intentionally placeholders.

## Run locally

```bash
npm install
npm run dev
```

For checks: `npm run build`, `npm run lint`, `npm test`.

## Team ownership

| Member | Area | Folder |
|---|---|---|
| M1 | Accounts and profiles | `src/pages/m1-auth` |
| M2 | Home, browse, admin listings | `src/pages/m2-browse` |
| M3 | Seller listings | `src/pages/m3-listings` |
| M4 | Requests | `src/pages/m4-requests` |
| M5 | Admin and categories | `src/pages/m5-admin` |

Shared files (`src/App.jsx`, `src/components`, `src/context`, `src/utils`) need coordination before editing. Each teammate should commit actual work on her own branch and open a pull request.

## Important limitations

- Pages display placeholder messages; no marketplace functionality is implemented.
- Auth and permissions are **not enforced**; `RequireRole` is a placeholder.
- Mock data files are empty starter modules.
- The scaffold is not proof of functional requirement coverage.
- Keep the original `fayidh(1).zip` separately as a reference; do not present its implementation as work developed later.

## AI use

The scaffold was generated with ChatGPT assistance from the structure of an earlier AI-assisted prototype. Record this in `AI_USAGE.md`, preserve the original conversation and intermediate artifacts, and accurately document subsequent AI-assisted changes.
