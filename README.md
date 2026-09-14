# Steel Broncos Robotics — Vercel Refurbishment

A sponsor-first static redesign for FIRST Robotics Competition Team 8029.

## Design goals

- Professional, engineering-forward visual identity
- Sponsor/grant conversion as a first-class goal
- Fast image loading and minimal JavaScript
- Responsive mobile navigation
- Persistent light/dark mode
- Data-driven team, mentor, sponsor, social, and history content
- Accessible semantic HTML and keyboard-friendly controls
- Easy editing by future student web developers

## Project structure

```text
/
├── index.html
├── team.html
├── impact.html
├── sponsors.html
├── history.html
├── contact.html
├── vercel.json
├── README.md
└── assets/
    ├── css/site.css
    ├── js/data.js      # EDIT THIS FIRST
    ├── js/site.js      # shared behavior/components
    └── images/
        ├── members/    # optimized student headshots
        ├── team/
        └── brand/
```

## Adding a team member

1. Export an approved professional headshot as WebP.
2. Put it in `assets/images/members/`.
3. Add an object to `teamMembers` in `assets/js/data.js`:

```js
{
  name: 'Student Name',
  role: 'Mechanical Lead',
  bio: 'Short 2–4 sentence biography.',
  image: 'assets/images/members/student-name.webp',
  skills: ['CAD', 'Fabrication', 'Project Management']
}
```

The Team page automatically creates the card.

## Image performance

Prefer WebP/AVIF, approximately 800–1200px on the long edge for profile and gallery images. Do not commit original multi-megabyte camera files unless they are stored outside the production asset directory.

The site uses:

- `loading="lazy"` for below-the-fold images
- `fetchpriority="high"` for the hero image
- `decoding="async"`
- explicit image dimensions where known
- CSS aspect-ratio containers to prevent layout shift
- Vercel long-lived asset caching
- the existing Wix CDN's transformed AVIF images temporarily for legacy public photography

For a full Wix-to-Vercel migration, download the approved original photos, optimize them into local WebP/AVIF files, then replace the CDN URLs in `assets/js/data.js`.

## Social media currently identified

- Instagram: https://www.instagram.com/steelbronco_robotics/
- X/Twitter: https://twitter.com/BroncoSteel
- Facebook: https://www.facebook.com/Steel-Bronco-Robotics-2332730843673036/

## Current contact identified on the public site

Steel Broncos Robotics — `info@team8029.com`

## Important content maintenance

The public source currently contains historical 2025 schedule information. Do not copy those dates into a new season page without verifying them. Update current-season competition dates in `assets/js/data.js` before publishing.

## Deployment

Import the repository into Vercel. No build command is required; the project is static HTML/CSS/JS.
