# Documents index: what's public and what's private

This folder mirrors the structure requested for the site: recommendation
letters, certificates, education records, awards, publications, experience
evidence, and a redacted-documents area. It exists so the underlying source
documents stay organised next to the site that references them, **not**
because all of it is meant to be pushed to GitHub.

**Read this before you `git add` anything in this repo.** The root
`.gitignore` already excludes the private folders below, but folder
contents change, so check `git status` before every commit.

## Why nothing here can be truly "gated" on free GitHub Pages

GitHub Pages (free tier, public repository) has no server, no login system,
and no per-file permissions. Any file committed to the repo and pushed is:

- reachable by anyone who has or guesses the URL,
- indexable by search engines,
- retrievable from git history even after you delete it in a later commit.

There is no built-in way to put a PDF "behind a button" that only some
visitors can open. Because of that, the website never links directly to a
recommendation letter, certificate, or any document containing personal
identifiers. Instead it shows **"Request full letter"** buttons that open a
pre-filled email to you. If you later want real gated downloads, the
options are: a private repo on a paid GitHub plan, a separate password-
protected host, or a third-party document-sharing link you control and can
revoke; none of that is set up here, and none of it costs anything to
*describe*, but actually wiring it up is a decision for you, not something
this build does automatically.

## Folder-by-folder status

| Folder | Committed to git? | Contents | Why |
| --- | --- | --- | --- |
| `recommendation-letters/` | **No** (gitignored) | The 6 full letters (Valiorgue, Ferrier, Archibong, Effiom, Abazie/Techno Oil, Twumasi) | Full letters are not published without your explicit approval, per your instructions. The site shows a summary card per recommender instead. |
| `education/` | **No** (gitignored) | Official diplomas and certificates from Centrale Lyon, Politecnico di Torino, and CRUTECH (full transcripts were removed from this project entirely, not just kept private) | These documents show your date of birth, passport number, home address, and student/registration numbers, none of which may be published. |
| `redacted-documents/` | **No** (gitignored) | Full GRE report, full IELTS report, full SAP score report | Contain date of birth, passport number, and/or full score breakdowns. Filenames are marked `FULL-DO-NOT-PUBLISH` as an extra safeguard. |
| `certificates/` | **No** (gitignored) | Every certificate PDF (LinkedIn Learning, Alison, CSSC, Bioresources Lab, Solar Innovators, Green Horizons, MSI) | Many of these images contain a certificate ID, an Alison learner ID plus your email, or a verification QR code that resolves to a page showing personal data. The public site shows clean, custom-designed certificate cards (title, issuer, date, category) with no scanned image, so nothing here needs to be public for the site to look complete. |
| `_private-source/` | **No** (gitignored) | Supporting letters not on your six-letter list (Sanofi mentor Saurin Patel, Nigerian Gas Company completion letter), plus a Gmail screenshot | Kept for your records; the Gmail screenshot in particular reveals your inbox UI and is never appropriate to publish. |
| `experience/` | **No** (gitignored, currently empty) | Reserved for any future employer reference letters or certificates of service | Same reasoning as recommendation letters: personal correspondence stays private by default. |
| `publications/` | **Yes** | Master's thesis title/abstract page, and the portfolio's publication list page | No personal identifiers beyond your name, which is already public on the CV and the site. |
| `awards/` | **Yes** | Sanofi Top-5 congratulation letters, IPSW mentorship certificate, SIRF award letters, Motor Valley Accelerator certificate | These are congratulatory/award documents with your name only: no DOB, passport, address, or ID numbers. |

## Safe to publish (already reflected on the site)

Name · professional headline · city · LinkedIn/GitHub/portfolio links ·
employer names, job titles, employment dates, and CV bullet points ·
degree titles, institutions, and overall classification (not per-course
grades) · publication titles/authors/venues · award names and dates ·
certificate titles, issuers, categories · recommender name, title,
institution, and a short summary of what they confirmed.

## Never publish (kept out of the repo by `.gitignore`)

Date of birth · passport number · home/permanent address · student or
registration numbers · fiscal code · full transcripts with per-course
grades · mother's/guardian's name · full GRE/IELTS/SAP reports ·
certificate verification IDs and QR codes · full recommendation-letter
text without your explicit sign-off · anything you haven't confirmed is
free of NDA restrictions.
