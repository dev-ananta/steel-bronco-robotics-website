# Steel Bronco Robotics — Team 8029 Website

A deliberately small, hand-maintainable static site for Steel Bronco Robotics / FRC Team 8029.

## Design direction

The site combines two useful directions: the sponsor/conversion focus and strong CTA structure of the refurbishment, with the editorial confidence, competition record, engineering/manufacturing story, FTC ecosystem and partner proof points of the public Team 8029 site.

The implementation intentionally avoids a framework and avoids runtime-generated page chrome. Shared navigation and footer markup live directly in each document so the site remains crawlable, resilient when JavaScript is unavailable, and easy for student developers to understand.

## Project structure

```text
/
├── index.html
├── engineering.html
├── team.html
├── competitions.html
├── impact.html
├── sponsors.html
├── join.html
├── robots.txt
├── sitemap.xml
├── vercel.json
├── README.md
└── assets/
    ├── css/site.css
    ├── js/site.js
    └── images/brand/
```

## Updating content

Most page copy is intentionally written in the HTML beside the section it describes. This makes edits obvious and prevents a large JavaScript data object from becoming a second templating system.

Seasonal facts should be verified before publishing. Placeholder sections are explicitly labeled when future team-approved information is expected.

## Images

The included SVG artwork is a temporary local placeholder, not an official team photograph or logo. Replace it with approved team assets in `assets/images/` before launch. Keep image dimensions explicit and prefer AVIF/WebP for photographs.

## Development

No build step is required. Open `index.html` locally or deploy the folder directly to Vercel.

The only JavaScript handles mobile navigation and the light/dark theme preference. The site remains usable if JavaScript fails.
