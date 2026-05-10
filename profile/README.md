# Abdellah Gourane Profile

This repository contains a static personal profile website plus a LaTeX resume source.

The website is the main portfolio shown in the browser:

- `index.html`: page structure and all visible sections
- `styles.css`: layout, colors, spacing, animations, responsive behavior
- `script.js`: interactions, filtering, counters, translations, theme/language persistence
- `assets/`: images and the PDF used by the "Open Resume" button

The resume source lives in:

- `ABDELLAH_GOURANE_CV_mini/resume.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/*.tex`

## What this profile includes

The website currently contains these main areas:

1. Hero section
2. Experience timeline with category filters
3. Skills constellation / interactive skill graph
4. Personal project section
5. Education and languages
6. Certifications
7. Hobbies and activities
8. Contact section

It also includes:

- Light and dark theme switch
- English and French language switch
- Animated counters
- Filterable experience cards
- Interactive skill inspector
- Stored user preferences in browser `localStorage`

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── pic.jpg
│   ├── avatar.png
│   └── ABDELLAH_GOURANE_CV_mini.pdf
├── ABDELLAH_GOURANE_CV_mini/
│   ├── resume.tex
│   ├── russell.cls
│   ├── pic.jpg
│   └── cv/
│       ├── summary.tex
│       ├── certification.tex
│       ├── languages.tex
│       ├── miscellaneous.tex
│       ├── education.tex
│       ├── experience.tex
│       └── projects.tex
└── ABDELLAH_GOURANE_CV_mini.pdf
```

## How the website works

### `index.html`

`index.html` is the source of truth for the page structure.

Important sections:

- Hero: intro, portrait, resume button, contact ribbon
- `#experience`: timeline cards and filter chips
- `#skills`: skill graph and skill inspector
- `#projects`: featured personal project
- `#languages`: education and spoken languages
- `#certifications`: certification cards and links
- `#hobbies`: hobbies, visual work, volunteer links
- `#contact`: final call-to-action buttons

When you want to:

- add a new section: edit `index.html`
- remove a section: delete or comment the related HTML block in `index.html`
- reorder sections: move the whole `<section ...>` block
- change text shown on the page: update the HTML and usually also `script.js`

### `styles.css`

`styles.css` controls:

- theme colors
- glass cards
- spacing
- typography
- grid layouts
- mobile responsiveness
- animations and hover states

The most important variables are at the top in `:root` and `body[data-theme="light"]`.

Change these when you want to update the visual identity:

- `--bg`, `--bg-2`: page background colors
- `--panel`: card background
- `--text`, `--muted`: text colors
- `--accent`, `--accent-2`, `--accent-3`: highlight colors
- `--radius`: rounded corners
- `--max-width`: page width

### `script.js`

`script.js` powers the interactive behavior:

- spotlight mouse effect
- animated counters
- experience filtering
- reveal-on-scroll behavior
- skill graph inspector
- theme switching
- language switching
- saving theme/language in `localStorage`

It also contains the bilingual text dictionary in the `uiText` object:

- `uiText.en`
- `uiText.fr`

If you add or rename any `data-i18n` key in `index.html`, you must also update both language objects in `script.js`.

## Local preview

Because this is a static site, you can preview it with a simple local server.

Example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly in a browser, but using a local server is cleaner.

## How to change

This section is the maintenance guide for future edits.

### 1. Change basic personal information

Update these areas in `index.html`:

- page title in `<title>`
- page description in `<meta name="description">`
- hero intro text
- phone number
- email
- LinkedIn URL
- visible name under the portrait
- contact buttons at the bottom

Also update the matching translation keys in `script.js` if the text uses `data-i18n`.

Common keys:

- `page_title`
- `page_description`
- `hero_eyebrow`
- `hero_lede`
- `personal_note_label`
- `personal_note_value`
- `contact_email`
- `contact_linkedin`

### 2. Change the portrait or profile image

The main portrait used by the website is:

- `assets/pic.jpg`

The resume portrait is a separate file:

- `ABDELLAH_GOURANE_CV_mini/pic.jpg`

If you want the same image everywhere:

1. Replace `assets/pic.jpg`
2. Replace `ABDELLAH_GOURANE_CV_mini/pic.jpg`

If the new file has a different name, also update:

- `index.html` for the website image path
- `ABDELLAH_GOURANE_CV_mini/resume.tex` for the LaTeX image include

### 3. Change the resume PDF linked on the website

The website button points to:

- `assets/ABDELLAH_GOURANE_CV_mini.pdf`

If you generate a new resume PDF, copy or export the updated file into `assets/` with the same name, or change the link in `index.html`.

There is also a root-level PDF:

- `ABDELLAH_GOURANE_CV_mini.pdf`

This looks like an extra exported copy. The website does not use this file directly.

### 4. Change hero text

Edit the hero section in `index.html`, then update the translation values in `script.js`.

Main keys involved:

- `hero_eyebrow`
- `hero_lede`
- `proof_oracle`
- `proof_phd`
- `proof_genai`
- `cta_resume`
- `cta_experience`

If you only change the raw HTML text but not `script.js`, the language switch may overwrite your changes.

### 5. Change experience items

Each experience entry is an `<article class="timeline-card ...">` block in `index.html`.

To edit an existing role:

1. Find the card in the `#experience` section
2. Update company, title, dates, description, bullets, stack line
3. Update matching translation keys in `script.js`

Relevant keys include:

- `exp_oracle_title`
- `exp_oracle_date`
- `exp_oracle_desc`
- `exp_oracle_b1`
- `exp_oracle_b2`
- `exp_oracle_b3`

The same pattern exists for:

- `exp_netsuite_*`
- `exp_attijari_*`
- `exp_tasmim_*`

To add a new experience:

1. Duplicate one timeline card in `index.html`
2. Give it a new `id`
3. Set `data-tags` for filtering
4. Add new translation keys in `script.js` for English and French
5. Update the visible counter if needed

### 6. Change experience filters

Filter buttons are the chips above the timeline in `index.html`.

Each card is linked to filters through `data-tags`.

Example:

- button: `data-filter="genai"`
- card: `data-tags="software genai"`

To add a new filter:

1. Add a new filter button in `index.html`
2. Add the same filter token to matching cards in `data-tags`
3. Add translation text in `script.js`

To remove a filter:

1. Remove the button
2. Remove or simplify the related `data-tags`

### 7. Change the animated counters

The three counters in the hero sidebar are static numbers animated by JavaScript.

The visible final values are stored in HTML as:

- `data-count="4"`
- `data-count="4"`
- `data-count="3"`

To update them:

1. Open `index.html`
2. Find each `.signal-value`
3. Change the `data-count` value

No JavaScript changes are needed unless you change the component structure.

### 8. Change the skills graph

The interactive "graph" is the skills constellation in `#skills`.

Each skill is a button like:

```html
<button class="node" data-skill="python" style="--x: 18%; --y: 18%">Python</button>
```

What each part means:

- visible label: button text
- `data-skill`: unique key used by JavaScript
- `--x` and `--y`: position inside the constellation

To rename a skill:

1. Change the button text in `index.html`
2. If needed, update the inspector content in `script.js`

To add a skill:

1. Duplicate a `.node` button in `index.html`
2. Give it a new `data-skill` value
3. Set new `--x` / `--y` positions
4. Add matching skill data in `script.js`

To remove a skill:

1. Delete the `.node` button in `index.html`
2. Remove the matching skill data entry in `script.js`

If you remove the graph entirely:

1. Delete the `constellation-card` block from `index.html`
2. Remove or simplify the skill-inspector logic in `script.js`
3. Optionally remove unused constellation styles from `styles.css`

### 9. Change the skill inspector content

The inspector content is not hardcoded in HTML. It is driven by JavaScript.

If a skill shows experience/project details when hovered or tapped, that mapping is defined in `script.js`.

When adding or changing a skill:

1. Keep the `data-skill` key in `index.html`
2. Update the corresponding JavaScript data in `script.js`
3. Verify that the inspector still fills:
   - title
   - description
   - experience list
   - project list

### 10. Change the featured project

The project section is in `#projects` inside `index.html`.

To edit the existing project:

1. Update the title, date, description, bullets, and GitHub link
2. Update matching translation keys in `script.js`

Relevant keys:

- `project_news_company`
- `project_news_title`
- `project_news_date`
- `project_news_desc`
- `project_news_b1`
- `project_news_b2`
- `project_news_b3`
- `project_view_repo`

To add another project:

1. Duplicate the project card in `index.html`
2. Create new translation keys in `script.js`
3. Adjust CSS only if the layout needs multiple cards

### 11. Change education and languages

These are inside the `#languages` section in `index.html`.

Education uses translation keys such as:

- `edu_phd_title`
- `edu_phd_date`
- `edu_eng_title`
- `edu_eng_date`
- `edu_cpge_title`
- `edu_cpge_date`

Languages use:

- `language_french`
- `language_english`
- `language_arabic`
- `level_intermediate`
- `level_native`

Update both HTML structure and `script.js` text values if needed.

### 12. Change certifications

Certifications are normal links in `#certifications` inside `index.html`.

To update them:

1. Edit the certification name
2. Edit the external badge URL
3. Adjust the card grouping if needed

If you add many more certifications, you may also want to update the certifications counter near the portrait.

### 13. Change hobbies, activities, and external links

The hobby cards are in `#hobbies`.

To change them:

1. Edit the card title
2. Edit the description
3. Edit the external URL
4. Update translation keys if the text uses `data-i18n`

Useful keys:

- `hob_type_visual`
- `hob_type_community`
- `hob_type_volunteer`
- `hob_photo_title`
- `hob_photo_desc`
- `hob_video_title`
- `hob_video_desc`
- `hob_club_desc`
- `hob_caravane_desc`

### 14. Change contact links

Contact links appear in two places:

1. The hero contact ribbon
2. The bottom contact section

When you update phone/email/social links, check both places in `index.html`.

### 15. Change theme colors

For design updates, edit the CSS variables near the top of `styles.css`.

Dark theme variables are in `:root`.
Light theme overrides are in `body[data-theme="light"]`.

If you want to:

- change the whole brand color: edit `--accent`, `--accent-2`, `--accent-3`
- make cards more transparent: edit `--panel`
- change text contrast: edit `--text` and `--muted`
- change rounded shape: edit `--radius`

### 16. Change layout or spacing

Use `styles.css`.

Common layout blocks:

- `.hero-grid`
- `.timeline`
- `.skill-layout`
- `.credentials-grid`
- `.feature-grid`
- `.contact-actions`

If something looks wrong on mobile, search for media queries in `styles.css` and update the responsive rules there.

### 17. Change theme and language behavior

Theme and language toggles are managed in `script.js`.

Saved browser keys:

- `portfolio-theme`
- `portfolio-language`

If you rename themes or languages, update:

- HTML buttons in `index.html`
- logic in `script.js`
- labels in `uiText`

### 18. Add a new translated text

When adding any new text that should switch between English and French:

1. Put a `data-i18n="your_key"` attribute on the element in `index.html`
2. Add `your_key` to `uiText.en` in `script.js`
3. Add `your_key` to `uiText.fr` in `script.js`

For image alt text, use:

- `data-i18n-alt="your_alt_key"`

If you forget one language entry, language switching will become inconsistent.

### 19. Remove a section completely

To remove a whole section cleanly:

1. Delete the full `<section ...>` block from `index.html`
2. Remove any top navigation link pointing to that section
3. Remove unused translation keys from `script.js`
4. Remove unused JavaScript logic if the section was interactive
5. Remove unused CSS selectors from `styles.css`

Examples:

- remove experience: also remove chip filtering logic
- remove skills graph: also remove skill-inspector logic
- remove counters: also remove animated counter logic

### 20. Add a new section

To add a section safely:

1. Create a new `<section class="section ...">` in `index.html`
2. Give it a unique `id`
3. Add a nav link if needed
4. Add translation keys for all text
5. Add CSS styles in `styles.css`
6. Add JavaScript only if the section needs interaction

### 21. Change or remove animations

Animations are split across CSS and JavaScript.

Examples:

- spotlight effect: `script.js` + `.spotlight` in `styles.css`
- reveal animations: `script.js` + related CSS classes
- number counters: `script.js`

To remove an animation fully, remove both the script behavior and the related CSS.

## Resume guide

The PDF resume is a separate system from the website.

### Main files

- `ABDELLAH_GOURANE_CV_mini/resume.tex`: main entry point
- `ABDELLAH_GOURANE_CV_mini/russell.cls`: resume template class
- `ABDELLAH_GOURANE_CV_mini/cv/summary.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/certification.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/languages.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/miscellaneous.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/education.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/experience.tex`
- `ABDELLAH_GOURANE_CV_mini/cv/projects.tex`

### What to edit for the resume

Use `resume.tex` for:

- header information
- phone
- email
- GitHub
- LinkedIn
- profile picture include
- which section files are included

Use files in `cv/` for the actual content:

- `summary.tex`: profile summary
- `certification.tex`: certifications
- `languages.tex`: languages
- `miscellaneous.tex`: technical skills, interests, volunteering
- `education.tex`: education
- `experience.tex`: professional experience
- `projects.tex`: projects

### Important note

The website content and resume content are separate.

Changing the website does not automatically update the LaTeX resume.
Changing the LaTeX resume does not automatically update the website.

If you want both to stay aligned, update both manually.

### If you want to show projects in the PDF

In `ABDELLAH_GOURANE_CV_mini/resume.tex`, this line is currently commented:

```tex
%\input{cv/projects.tex}
```

Uncomment it to include the projects section in the PDF.

### Compile the resume

From the resume folder:

```bash
pdflatex resume.tex
```

Depending on your LaTeX setup, you may want to compile more than once.

After generating the updated PDF, copy the final version into:

- `assets/ABDELLAH_GOURANE_CV_mini.pdf`

so the website button opens the newest resume.

## Safe editing workflow

For almost every future change, use this order:

1. Update `index.html` for structure/content
2. Update `script.js` if the text is translated or the feature is interactive
3. Update `styles.css` if the layout or design changes
4. Reload the page and test:
   - light theme
   - dark theme
   - English
   - French
   - desktop width
   - mobile width

This project can break in subtle ways if you update only one layer.

## Quick checklist before finishing any update

- Does the page still load?
- Do all nav links still point to valid section IDs?
- Do both languages still work?
- Do theme buttons still work?
- Do filtered experience cards still behave correctly?
- Does the skill graph still open correct details?
- Are all external links correct?
- Does the resume button open the expected PDF?
- If you changed the portrait, did you update both website and resume copies if needed?

## Most common future edits

If you want to:

- change text: `index.html` + `script.js`
- change colors: `styles.css`
- change image: `assets/pic.jpg`
- change resume: `ABDELLAH_GOURANE_CV_mini/` + copy PDF to `assets/`
- add a new role: `index.html` + `script.js`
- remove the skills graph: `index.html` + `script.js` + `styles.css`
- add a new section: `index.html` + `script.js` + `styles.css`
- change links: `index.html`
- update translations: `script.js`

## Final recommendation

When making future edits, do not treat this profile as a single file site.

There are really two systems here:

1. The static portfolio website
2. The LaTeX resume

And inside the website there are three layers:

1. Structure in `index.html`
2. Design in `styles.css`
3. Behavior and translations in `script.js`

If you keep that mental model, future changes will stay straightforward.
