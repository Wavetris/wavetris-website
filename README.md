# WAVETRIS Website

Production-ready Next.js site for **wavetris.com**.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a new Git repository and upload this folder.
2. Import the repository into Vercel.
3. Framework preset should be detected automatically as **Next.js**.
4. Deploy.
5. In Vercel → Project → Settings → Domains, add:
   - `wavetris.com`
   - `www.wavetris.com`
6. Vercel will show the DNS records required for your registrar. Add those records where the domain is managed.
7. Set `wavetris.com` as the primary domain and redirect `www.wavetris.com` to it.

## Contact email

The site currently links project enquiries to:

`info@wavetris.com`

Create this mailbox/forwarder before launch, or change the email in `app/page.js`.

## Brand

The public-facing brand is **WAVETRIS** only. “Electronic Product Design & Engineering” is used as positioning text, not as part of the company name.
