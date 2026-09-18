# Oghenefegor Favour Ugbine | Portfolio Website

A static, dependency-free portfolio site (HTML + CSS + vanilla JS) built for
free GitHub Pages hosting. Design direction: **"Engineering Drawing Meets
Digital Twin"**: a dark, blueprint-inspired system with a light mode,
built around your CV and portfolio as the only sources of truth.

**Nothing in this project has been published anywhere.** These are local
files for you to review before anything goes on the internet.

## Project structure

```text
portfolio-site/
├── index.html                  # the whole site (one page, anchor-linked sections)
├── style.css                   # design system (dark/light, layout, print styles)
├── script.js                   # theme toggle, filters, reveal animation, nav
├── README.md                   # this file
├── .gitignore                  # keeps private documents out of git (see below)
├── assets/
│   ├── images/headshot.jpg     # extracted from your CV, upscaled slightly
│   ├── icons/favicon.svg
│   └── documents/
│       └── Oghenefegor_Favour_Ugbine_CV.pdf   # your CV, the "Download CV" file
├── projects/                   # reserved for future standalone project pages
└── documents/                  # source documents, split by topic (see documents/README.md)
    ├── README.md                # full public/private index, read this first
    ├── recommendation-letters/  # PRIVATE, gitignored
    ├── education/               # PRIVATE, gitignored
    ├── certificates/            # PRIVATE, gitignored
    ├── redacted-documents/      # PRIVATE, gitignored (GRE/IELTS/SAP full reports)
    ├── _private-source/         # PRIVATE, gitignored (supporting letters, a screenshot)
    ├── experience/               # PRIVATE, gitignored, currently empty
    ├── publications/             # public: thesis abstract & publication list
    └── awards/                   # public: award/congratulation letters
```

## What's already in place

- All 14 content areas you asked for, organised into one scrollable page with
  anchored navigation: Home, About, Education, Experience, Projects (filterable
  by Computational Mechanics / Mechanical Design / Manufacturing & Materials /
  Energy & Sustainability), Certifications (filterable, 22 entries),
  Publications, Awards, Recommendations, Documents & Evidence, and CV & Contact.
- Dark mode by default with a light-mode toggle (remembers your choice locally).
- Responsive layout, keyboard-accessible nav and filters, smooth scrolling,
  scroll-reveal animation, a stat count-up on the homepage, semantic HTML,
  SEO + Open Graph metadata, and a `@media print` stylesheet so the page
  prints cleanly.
- A contact "form" that opens the visitor's own email client
  (`mailto:` + `enctype="text/plain"`); there is no backend and no paid
  service involved, exactly as requested.
- All 6 recommendation letters, all 22 certificates, and award
  letters extracted from your portfolio PDF and organised into
  `documents/`, with a `.gitignore` that keeps the sensitive ones off GitHub
  entirely. Read `documents/README.md` for the full breakdown of what's
  public vs. private and why.

## Before you publish: things to check

1. **Publication link, resolved.** The source portfolio's embedded hyperlink
   for "Advancements in Eco-Friendly Drilling Fluids…" pointed to a PDF file
   named after a different paper (marine algae as a carbon sink). You
   supplied the correct link directly; I fetched it to confirm the actual
   PDF content matches the drilling-fluids paper (its filename on the
   journal's server is just misleading), and the site now links to it.
2. **French proficiency: A2.** Confirmed against the official CEFR
   assessment from École des Mines de Saint-Étienne (your CV separately
   says "B1"). The site shows **A2 (CEFR-certified), progressing**.
3. **English proficiency: shown as C2.** You confirmed C2. Flagging for
   your awareness: your IELTS certificate in `documents/redacted-documents/`
   shows an Overall Band of 7.0, which on the standard IELTS-to-CEFR
   alignment table (used by most universities and employers) maps to C1,
   not C2. If there's a newer or different result behind the C2 figure,
   ignore this note; otherwise you may want to double-check before this
   goes live to European recruiters who may cross-check the certificate.
4. **Phone number.** Shown in the site's Contact section, matching your CV.
5. **Headshot.** Replaced with the higher-resolution photo you provided.
6. **GitHub username assumption.** Your CV's GitHub link is
   `github.com/OghenefegorUgbine`, used throughout the site, including for
   the thesis code link (`github.com/OghenefegorUgbine/abaqus_jc_inverse_method`,
   found in your portfolio's publication-list hyperlinks). Confirm that repo
   is public and up to date before the "View code" button goes live.
7. **Certificate and document evidence** is described as "available on
   request" everywhere rather than linked, per your privacy instructions.
   Confirm you're happy with that approach (see `documents/README.md` for
   the reasoning).

## Publishing to GitHub Pages (step by step)

**Nothing here happens automatically: you drive every step, and you can
stop at any point.**

1. **Create a GitHub account**, if you don't have one, at
   [github.com/join](https://github.com/join); it's free.
2. **Create a new repository.**
   - Click the **+** in the top-right corner → **New repository**.
   - For a personal "root" site reachable at `https://<your-username>.github.io/`,
     name the repository exactly `<your-username>.github.io` (e.g.
     `oghenefegorugbine.github.io`). Any other name (e.g. `portfolio`) also
     works, but the site then lives at
     `https://<your-username>.github.io/portfolio/`.
   - Set visibility to **Public** (GitHub Pages on the free plan requires a
     public repository. This is exactly why the private documents are kept
     out of it via `.gitignore`).
   - Do **not** initialise with a README (this project already has one).
3. **Upload the files.** Easiest without git installed: on the new repo's
   page, click **uploading an existing file**, then drag in everything
   from this project folder **except** the folders `.gitignore` already
   excludes (GitHub's web uploader doesn't read `.gitignore`, so manually
   skip `documents/recommendation-letters/`, `documents/education/`,
   `documents/certificates/`, `documents/redacted-documents/`,
   `documents/_private-source/`, and `documents/experience/`). If you're
   comfortable with git/terminal instead:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
   Because `.gitignore` is in place, `git add .` will not stage the private
   folders, but it's worth running `git status` before committing to see
   exactly what's about to be tracked.
4. **Enable GitHub Pages.**
   - In the repository, go to **Settings** → **Pages** (left sidebar).
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose **main** and folder **/ (root)**, then **Save**.
5. **Select the correct branch/folder.** That's the `main` / `/ (root)` choice
   above; no separate `docs/` folder or `gh-pages` branch is needed for this
   project.
6. **Open the public site.** GitHub Pages takes a minute or two to build the
   first time. The URL appears on the same **Settings → Pages** screen,
   typically `https://<your-username>.github.io/` or
   `https://<your-username>.github.io/<repo-name>/`.
7. **Update the site later.** Edit files locally and re-upload (web
   uploader) or `git add . && git commit -m "update" && git push`; GitHub
   Pages rebuilds automatically within a minute or two of any push to `main`.
8. **Custom domain (optional, later).** GitHub Pages supports a custom
   domain for free (you still pay a registrar for the domain itself, which
   this project does not set up or recommend any particular provider for).
   When you're ready: **Settings → Pages → Custom domain**, add your domain,
   and create the DNS records GitHub shows you at your domain registrar.

## What this project deliberately does NOT do

- It does not create or push to any GitHub repository; that's step 2 above,
  for you to do (or ask me to walk through with you live).
- It does not purchase a domain or use any paid service.
- It does not publish your recommendation letters, diplomas, certificate
  files, or any document containing your date of birth, passport number,
  home address, or registration numbers.
