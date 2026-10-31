# Pratik Fating Portfolio (React + Vite + Tailwind + Framer Motion)

## Run locally (Node 18+)
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
    npm run preview

## Edit content
Everything lives in `src/data/portfolio.js`. Your photo is `public/profile-photo.jpg`; change `profile.photo` to use another file. Replace `public/resume.pdf` to update the download.

## Contact form (EmailJS)
Copy `.env.example` to `.env` and fill the three VITE_EMAILJS_* values (template variables: from_name, reply_to, subject, message). Without them the form shows a clear "not set up" message with a mailto fallback and never claims success.

## GitHub
    git init && git add . && git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/<you>/my-portfolio.git
    git push -u origin main

## Vercel
1. vercel.com > Add New > Project > import the repo (Framework: Vite, build `npm run build`, output `dist`).
2. Add the VITE_EMAILJS_* variables under Settings > Environment Variables, then redeploy.
3. Verify: open the URL, test nav, filters, resume download (`/resume.pdf`) and the form.
4. Update later: edit, commit, push; Vercel redeploys automatically.

## Common fixes
- Blank page or 404 asset: keep `base: '/'` in vite.config.js; files in `public/` are referenced as `/name`.
- Build fails: delete `node_modules` and `package-lock.json`, run `npm install` again, check Node >= 18.
