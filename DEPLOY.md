# Deploy Guide

This portfolio is a static website. That means deployment is simple:

- no backend
- no database
- no build step required
- no package install required

You only need to host these files:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

## What you should do before deploying

Run this checklist first:

1. Open the site locally and confirm it works
2. Check that the resume button opens the correct PDF
3. Check that the image loads correctly
4. Check both language buttons
5. Check both theme buttons
6. Check mobile layout
7. Check all external links

## Local test before deploy

From the project folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

If everything looks correct, deploy.

## Recommended deployment: Netlify

Netlify is the easiest option for this project because this site is fully static.

### Step by step

1. Make sure your project folder contains:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`

2. Create an account on Netlify if you do not already have one.

3. In Netlify, create a new site.

4. Choose one of these two methods:
   - drag and drop the project folder
   - connect a Git repository and deploy from it

### Option A: Drag and drop deployment

This is the fastest method.

1. Compress or prepare the portfolio folder
2. In Netlify, go to the deploy page
3. Drag the portfolio folder contents or the prepared folder upload area
4. Wait for upload to finish
5. Netlify gives you a public URL
6. Open the URL and test the live site

Important:

- upload the project root contents
- `index.html` must stay at the root
- do not upload only the `assets/` folder

### Option B: Deploy from Git

This is better if you want easy future updates.

1. Put this project in a GitHub repository
2. Push your files
3. In Netlify, choose "Import from Git"
4. Select your repository
5. For build settings:
   - build command: leave empty
   - publish directory: `.`
6. Start deployment
7. Wait for the site to go live

Because this is a static site, Netlify does not need a build command.

### How to update later on Netlify

If you used drag and drop:

1. Edit your local files
2. Test locally
3. Upload the updated site again

If you used Git:

1. Edit your local files
2. Push changes to your repository
3. Netlify redeploys automatically

## Alternative deployment: GitHub Pages

GitHub Pages also works well for this project.

## Step by step

1. Create a GitHub repository
2. Upload this portfolio project to the repository root
3. Make sure `index.html` is at the top level of the repository
4. Push your changes
5. Open the repository settings
6. Find the Pages section
7. Enable GitHub Pages
8. Choose the branch to deploy from
9. Save the settings
10. Wait for GitHub Pages to publish the site
11. Open the generated site URL

### Important notes for GitHub Pages

- keep `index.html` in the root
- keep asset paths relative as they are now
- confirm `assets/ABDELLAH_GOURANE_CV_mini.pdf` exists in the repository

### How to update later on GitHub Pages

1. Edit the project locally
2. Test locally
3. Commit and push changes
4. Wait for GitHub Pages to publish the new version

## Alternative deployment: Vercel

Vercel can host this project too.

### Step by step

1. Create a Vercel account
2. Import the Git repository
3. Select this project
4. Leave the framework detection empty or use static site settings
5. Leave the output directory empty if not requested
6. Deploy
7. Test the live URL

For this project, Vercel is also hosting plain static files.

## If you want a custom domain

After deployment on Netlify, GitHub Pages, or Vercel:

1. Buy or use your domain
2. Open your hosting provider domain settings
3. Add the custom domain
4. Update your DNS records where your domain is managed
5. Wait for DNS propagation
6. Confirm HTTPS is enabled

## Exact files that must be deployed

These are the website files that matter for production:

```text
index.html
styles.css
script.js
assets/
```

These resume source files do not need to be deployed unless you want to keep them in your repository:

```text
ABDELLAH_GOURANE_CV_mini/
```

The website only needs the exported PDF inside `assets/`.

## If the resume does not open after deploy

Check these:

1. `assets/ABDELLAH_GOURANE_CV_mini.pdf` exists
2. The link in `index.html` is still:

```html
href="assets/ABDELLAH_GOURANE_CV_mini.pdf"
```

3. The file name matches exactly, including uppercase and lowercase letters

## If the image does not show after deploy

Check these:

1. `assets/pic.jpg` exists
2. The image path in `index.html` is correct
3. The filename case matches exactly

## If CSS or JavaScript does not load after deploy

Check these:

1. `styles.css` is in the root
2. `script.js` is in the root
3. `index.html` links to them with the current filenames
4. You uploaded the whole project, not only part of it

## Simplest deployment path

If you want the shortest possible process, do this:

1. Test locally with `python3 -m http.server 8000`
2. Create a GitHub repo
3. Push the project
4. Connect the repo to Netlify
5. Set publish directory to `.`
6. Deploy
7. Open the public URL and verify everything

## Deployment checklist

Before going live:

1. Confirm text is final
2. Confirm links are final
3. Confirm image is final
4. Confirm resume PDF is final
5. Confirm mobile layout is correct
6. Confirm English and French both work
7. Confirm light and dark theme both work

After going live:

1. Open the live site on desktop
2. Open the live site on mobile
3. Click every main navigation link
4. Open the resume
5. Test contact links
6. Test external social links

## Final recommendation

For this portfolio:

- use Netlify if you want the easiest deployment
- use GitHub Pages if you want simple GitHub-based hosting
- use Vercel if you already use it elsewhere

If you want the easiest future updates, deploy from a Git repository instead of drag and drop.
