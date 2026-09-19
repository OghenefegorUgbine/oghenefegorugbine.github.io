# Oghenefegor Favour Ugbine | Portfolio Website

A static, dependency-free portfolio site (HTML + CSS + vanilla JS) built for
free GitHub Pages hosting. Design direction: **"Engineering Drawing Meets
Digital Twin"**: a dark, blueprint-inspired system with a light mode,
built around your CV and portfolio as the only sources of truth.

**This project is published (or being published) to GitHub Pages** at your
request; see the "Before you publish" section below for exactly what
changed in the most recent round and what's now public versus still
private.

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
    ├── degree-certificates/      # public: redacted certificates for Ecole des Mines, Centrale Lyon, CRUTECH
    ├── certifications/           # public: all 22 professional certification PDFs
    ├── recommendations/          # public: all 6 full recommendation letters
    ├── test-scores/               # public: redacted GRE and IELTS score reports
    ├── recommendation-letters/  # PRIVATE, gitignored (original unmodified copies)
    ├── education/               # PRIVATE, gitignored (unredacted originals, CGPA letter, Politecnico cert)
    ├── certificates/            # PRIVATE, gitignored (original unmodified copies)
    ├── redacted-documents/      # PRIVATE, gitignored (unredacted GRE/IELTS originals, full SAP report)
    ├── _private-source/         # PRIVATE, gitignored (supporting letters, a screenshot)
    ├── experience/               # PRIVATE, gitignored, currently empty
    ├── publications/             # public: thesis abstract & publication list
    └── awards/                   # public: award/congratulation letters
```

## What's already in place

- All 14 content areas you asked for, organised into one scrollable page with
  anchored navigation: Home, About, Education, Experience, Projects (filterable
  by Computational Mechanics / Mechanical Design / Manufacturing & Materials /
  Energy & Sustainability), Certifications (filterable, 21 entries),
  Publications, Awards, Recommendations, Documents & Evidence, and CV & Contact.
- Dark mode by default with a light-mode toggle (remembers your choice locally).
- Responsive layout, keyboard-accessible nav and filters, smooth scrolling,
  scroll-reveal animation, a stat count-up on the homepage, semantic HTML,
  SEO + Open Graph metadata, and a `@media print` stylesheet so the page
  prints cleanly.
- A contact "form" that opens the visitor's own email client
  (`mailto:` + `enctype="text/plain"`); there is no backend and no paid
  service involved, exactly as requested.
- All 6 recommendation letters, 21 of 22 certificates, and 3 of 4 degree
  certificates are now linked directly and publicly from the site (see
  `documents/README.md` for exactly which files, and why the remaining
  few aren't linked). The `.gitignore` still keeps the original,
  unredacted source copies and anything with a passport number, address,
  registration number, or exam score report off GitHub entirely.

## Before you publish: things to check

1. **Publication link, resolved.** The source portfolio's embedded hyperlink
   for "Advancements in Eco-Friendly Drilling Fluids…" pointed to a PDF file
   named after a different paper (marine algae as a carbon sink). You
   supplied the correct link directly; confirmed the actual PDF content
   matches the drilling-fluids paper (its filename on the journal's server
   is just misleading), and the site links to it.
2. **French proficiency: A2. English: C2.** Both per your instruction. Your
   actual IELTS Test Report Form is now linked publicly from the Education
   section's "Standardized Test Scores" block (Overall Band 7.0), and it
   prints "CEFR Level: C1" directly on the document, so this is a real,
   one-click-away discrepancy now, not just a private note: anyone who
   clicks through from "C2" in About to the linked certificate sees "C1"
   on the certificate itself. If there's a newer or different result
   behind the C2 figure, ignore this; otherwise you may want to either
   change the About section to say C1, or add a short explanation, before
   this goes to recruiters who check certificates.
3. **CV replaced.** `assets/documents/Oghenefegor_Favour_Ugbine_CV.pdf` is
   now the CV you supplied in this round, replacing the earlier version.
4. **Degree certificates, now public.** École des Mines de Saint-Étienne,
   École Centrale de Lyon, and CRUTECH certificates are linked from the
   Education section and published in full, exactly as issued, with
   nothing on them covered or removed. Only the degree certificates go up,
   no transcripts. Politecnico di Torino isn't published: you said you
   don't have that certificate yet, so it shows "available on request"
   instead of a link.
5. **All grades and class rankings removed.** CGPA, class of degree,
   class ranking, and per-programme numeric marks (15.98/20, 99/110) are
   gone from the Education section and its tags.
6. **Certificates and recommendation letters, now public.** 19 of 21
   remaining certification cards link to their PDF; the other 2 (SAP
   Certified Associate, IWCF Level 1 Well Control) have no scanned copy in
   this project. All 6 recommendation letters are linked in full.
7. **Thesis code and Sanofi project details kept confidential**, per your
   instruction. The Sanofi award/certificate itself is now linked publicly
   from the Awards section; the "View code" button for the thesis GitHub
   repo has been removed and now reads "Code confidential".
8. **Google Drive / portfolio link removed** from the Contact section, per
   your instruction. The site no longer links anywhere to your Drive.
9. **GRE and IELTS score reports, now public.** Per your instruction, both
   are linked from a new "Standardized Test Scores" block at the bottom of
   the Education section, with the actual scores shown inline (GRE Verbal
   161/Quant 170/AWA 3.5; IELTS 6.0/8.5/6.5/7.0, Overall 7.0). Each PDF has
   had its home address, phone number, and exam ID/registration number
   redacted (removed from the underlying PDF text, not just covered);
   date of birth is still visible on both, same treatment as the degree
   certificates. The SAP score report was not touched and stays private,
   you didn't ask for it and it wasn't part of this request.
10. **Erasmus Mundus Certificate of Admission, now public in full.** Linked
    from the Erasmus Mundus Joint Master's Scholarship card in Awards, and
    published exactly as issued at your request, with nothing covered. Please
    note this document has your passport number, your Saint-Etienne home
    address, and your date of birth printed on it, all now publicly visible.

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
