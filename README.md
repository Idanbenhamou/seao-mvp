# SEAO MVP (Front-end scaffold)
 test deploy
 
This project is a **starter scaffold** (Next.js App Router) that matches the SEAO styling direction:
- Public site pages (Home, Pricing, About, Contact, Features)
- Sign-in page (placeholder)
- Role selection screen (Staff / Organisateur / Salle)
- Post-login dashboards for each role (placeholders)

## Run locally
```bash
npm install
npm run dev
```

Open: http://localhost:3000

## Notes for the developer
- Replace the placeholder auth in `app/signin/page.tsx` with real auth (Supabase, etc.).
- Replace the role storage logic with RBAC (e.g., user roles table).
- Keep the UI components in `app/ui/*` and styling in `app/globals.css`.

