# Documents index: what's public and what's private

This folder mirrors the structure requested for the site: recommendation
letters, certificates, education records, awards, publications, experience
evidence, and a redacted-documents area, plus four new folders
(`degree-certificates/`, `certifications/`, `recommendations/`,
`test-scores/`) that hold the public copies now linked from the site
itself.

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
visitors can open, so anything you asked to be public is genuinely public
to anyone with the link, not gated. If you later want real gated
downloads instead, the options are: a private repo on a paid GitHub plan,
a separate password-protected host, or a third-party document-sharing
link you control and can revoke; none of that is set up here.

## Folder-by-folder status

| Folder | Committed to git? | Contents | Why |
| --- | --- | --- | --- |
| `degree-certificates/` | **Yes** | Public copies of the École des Mines de Saint-Étienne master's diploma, the École Centrale de Lyon certificate of achievement, and the CRUTECH bachelor's degree certificate | Published at your request. The École des Mines and CRUTECH copies have had the grade/honours text ("mention Bien", "Second Class Hons. Upper Division") redacted with a solid black bar so no class ranking is shown; the Centrale Lyon certificate never stated one. Note: the École des Mines and Centrale Lyon documents do show your date of birth and birthplace, since that's printed on the certificate itself and you asked for these to go up as-is otherwise. |
| `certifications/` | **Yes** | Public copies of all 22 certificate files that exist in this project (Alison, LinkedIn Learning, CSSC, Bioresources Lab, MSI, Solar Innovators, Green Horizons) | Published at your request. 19 of these are linked directly from a "View certificate" button on their card in the Certifications section. The other 3 (French for Beginners, the second CSSC white-belt scan, Green Horizons symposium attendance, Solar Innovators fellowship record) are in this public folder too but don't have a dedicated card, so they're reachable by direct link/repo browsing rather than a button. SAP Certified Associate and IWCF Level 1 Well Control have no scanned certificate anywhere in this project, public or private, so their cards have no link. |
| `recommendations/` | **Yes** | Public copies of all 6 recommendation letters (Valiorgue, Ferrier, Archibong, Effiom, Abazie/Techno Oil, Twumasi) | Published at your request. Each is linked from a "View letter" button on its card in the Recommendations section. |
| `test-scores/` | **Yes** | Redacted copies of the GRE General Test score report and the IELTS Academic Test Report Form | Published at your request. Home address, phone number, GRE registration number, and IELTS candidate ID have been redacted (black bar, text actually removed from the PDF, not just covered) on both; date of birth is still visible on both, same as the degree certificates. Linked from the new "Standardized Test Scores" block in the Education section. The IELTS form shows a CEFR level of C1 from its Overall Band Score of 7.0, this is printed on the document itself and will be visible next to the "C2" shown in the About section. |
| `recommendation-letters/` | **No** (gitignored) | Original, unmodified copies of the same 6 letters | Kept as your private source copies; the site links to `recommendations/` instead. |
| `education/` | **No** (gitignored) | Original, unredacted certificates and diplomas from Centrale Lyon, Politecnico di Torino, CRUTECH, plus the CRUTECH CGPA/class-ranking attestation letter, the École des Mines French CEFR assessment, and the META 4.0 overall programme certificate | The CGPA/ranking letter states your class of degree and CGPA directly and is never published. The Politecnico di Torino certificate isn't published either (see below). The other files here are private source copies of documents whose redacted, public versions now live in `degree-certificates/`. |
| `redacted-documents/` | **No** (gitignored) | Original, unredacted GRE report, original unredacted IELTS report, and the full SAP score report | The GRE and IELTS originals here still have the address, phone, and ID numbers visible; their redacted public copies live in `test-scores/` instead. The SAP score report isn't published in any form. Filenames are marked `FULL-DO-NOT-PUBLISH` as an extra safeguard. |
| `certificates/` | **No** (gitignored) | Original, unmodified copies of all 22 certificate files | Kept as your private source copies; the site links to `certifications/` instead. |
| `_private-source/` | **No** (gitignored) | Supporting letters not on your six-letter list (Sanofi mentor Saurin Patel, Nigerian Gas Company completion letter), plus a Gmail screenshot | Kept for your records; the Gmail screenshot in particular reveals your inbox UI and is never appropriate to publish. |
| `experience/` | **No** (gitignored, currently empty) | Reserved for any future employer reference letters or certificates of service | Same reasoning as recommendation letters: personal correspondence stays private by default. |
| `publications/` | **Yes** | Master's thesis title/abstract page, and the portfolio's publication list page | No personal identifiers beyond your name, which is already public on the CV and the site. |
| `awards/` | **Yes** | Sanofi Top-5 congratulation letters, IPSW mentorship certificate, SIRF award letters, Motor Valley Accelerator certificate, Erasmus Mundus Certificate of Admission | These are congratulatory/award documents. Most have your name only: no DOB, passport, address, or ID numbers. The Sanofi certificate is linked directly from its card in the Awards section; the underlying project/device work stays described only in summary, per your instruction that the work itself stay confidential. The Erasmus Mundus Certificate of Admission is the exception: the original had your passport number and your home address in Saint-Etienne printed on it, so both have been redacted (removed from the underlying PDF text, not just covered) before publishing; your date of birth and the scholarship's financial figures (participation costs, monthly subsistence, total) are still visible, since neither is on your never-publish list. |

## Politecnico di Torino certificate

You said you don't have this certificate yet, so nothing is published or
staged for it. The Education section shows a plain "available on request"
note in its place instead of a broken link or a placeholder file. Add the
real file to `documents/degree-certificates/` and link it from the
Education section in `index.html` whenever you do have it.

## Safe to publish (already reflected on the site)

Name, professional headline, city, LinkedIn/GitHub links, employer names,
job titles, employment dates, CV bullet points, degree titles,
institutions, and dates (no grades or class rankings), publication
titles/authors/venues, award names and dates, certificate titles,
issuers, categories, recommender name, title, institution, and a short
summary of what they confirmed, plus the specific documents listed above
that you've explicitly asked to publish.

## Never publish (kept out of the repo by `.gitignore`)

Passport number, home/permanent address, phone number on the score
reports specifically, student or registration numbers, fiscal code, full
transcripts with per-course grades, class of degree, CGPA, or class
ranking, mother's/guardian's name, the full unredacted GRE/IELTS reports
and the SAP score report, certificate verification IDs and QR codes,
anything you haven't confirmed is free of NDA restrictions, and (per your
instruction) the master's thesis code and the Sanofi project's design
details.
