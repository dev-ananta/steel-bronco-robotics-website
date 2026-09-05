# Steel Broncos Robotics Website

A modern rebuild of the **Steel Broncos Robotics** website.

The current website contains the primary sections **Home, Teams, Sponsors, Schedule, Coaches, Donate, and Contact**, along with shared navigation, social media, newsletter, and footer components.

## Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* HTML5
* CSS

### Backend

* Node.js
* TypeScript
* REST API
* Database — TBD based on project requirements

### Recommended Structure

```text
steel-broncos-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── assets/
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   └── lib/
│   └── ...
│
├── README.md
└── ...
```

---

# Development Rules

## 1. Shared Components

These should be built once and reused across every page.

Examples:

* Navbar
* Mobile navigation
* Footer
* Social links
* Buttons
* Cards
* Section headers
* Image/gallery components
* Newsletter signup
* Loading states
* Error states

Do **not** create separate versions of the navbar/footer for individual pages.

---

## 2. Frontend / Backend Separation

### Frontend

Responsible for:

* Page layouts
* Components
* Styling
* Animations
* Responsive design
* Forms
* API consumption
* Client-side validation

### Backend

Responsible for:

* API endpoints
* Database
* Authentication if required
* Form submissions
* Newsletter subscriptions
* Contact submissions
* Admin functionality
* Data validation
* External API integrations

The frontend should communicate with the backend through clearly defined API endpoints.

---

# OPTION A — 2-PERSON TEAM

This is the recommended setup if only two people are working.

## Person 1 — Frontend / Design

### Primary responsibility

Build the entire frontend system and establish the visual design language.

### Shared infrastructure

* React/TypeScript setup
* Tailwind configuration
* Global styles
* Design system
* Navbar
* Footer
* Shared components
* Responsive/mobile layout

### Pages

#### Home

* Hero
* Mission statement
* Team introduction
* Competition section
* Highlight reel
* Join Us section
* Newsletter section

#### Teams

* Team overview
* Individual teams
* Team information/cards
* Photos

#### Coaches

* Coach profiles
* Coach information
* Photos

### Also responsible for

* Mobile responsiveness
* Accessibility
* Visual consistency
* Animations
* Image optimization

---

# Person 2 — Backend + Frontend Pages

### Backend

Own the backend architecture:

* Server setup
* API structure
* Database
* Data models
* Validation
* Contact form API
* Newsletter API
* Admin/data management APIs
* Error handling

### Pages

#### Sponsors

* Sponsor listing
* Sponsor tiers
* Sponsor information
* Sponsor logos

#### Schedule

* Competition schedule
* Events
* Dates
* Locations
* Results where applicable

#### Donate

* Donation information
* Donation CTA
* Donation integration

#### Contact

* Contact information
* Contact form
* Form validation
* Backend submission

### Frontend integration

Person 2 connects their pages to the backend APIs.

---

## 2-Person Ownership Summary

| Area                   | Person 1 | Person 2 |
| ---------------------- | :------: | :------: |
| React setup            |    🟢    |          |
| TypeScript setup       |    🟢    |          |
| Tailwind/design system |    🟢    |          |
| Navbar                 |    🟢    |          |
| Footer                 |    🟢    |          |
| Shared components      |    🟢    |          |
| Home                   |    🟢    |          |
| Teams                  |    🟢    |          |
| Coaches                |    🟢    |          |
| Sponsors               |          |    🟢    |
| Schedule               |          |    🟢    |
| Donate                 |          |    🟢    |
| Contact                |          |    🟢    |
| Backend                |          |    🟢    |
| Database               |          |    🟢    |
| API                    |          |    🟢    |
| Mobile/responsive      |    🟢    |    🟡    |
| Final integration      |    🟢    |    🟢    |

🟢 = Primary owner
🟡 = Secondary/support

---

# OPTION B — 3-PERSON TEAM

If a third developer joins, divide the work into **Frontend, Backend, and Content/Pages**.

This is the cleanest three-person architecture.

## Person 1 — Frontend / Design System

Owns the foundation that everyone else uses.

### Responsibilities

* React architecture
* TypeScript configuration
* Tailwind configuration
* Global styling
* Design system
* Navbar
* Footer
* Buttons
* Cards
* Forms
* Responsive layout
* Accessibility
* Animations
* Shared components

### Pages

* Home
* Teams

---

## Person 2 — Backend / Data

Owns everything server-side.

### Responsibilities

* Backend architecture
* API
* Database
* Models
* Validation
* Contact API
* Newsletter API
* Schedule API
* Sponsor API
* Donation integration
* Admin functionality
* Error handling
* Deployment configuration

Person 2 should **not** need to build page layouts unless helping with integration.

---

## Person 3 — Content / Pages

Owns the remaining page implementations.

### Pages

#### Sponsors

* Sponsor directory
* Sponsor tiers
* Logos
* Sponsor information

#### Schedule

* Competition schedule
* Events
* Locations
* Dates
* Results

#### Coaches

* Coach profiles

#### Donate

* Donation information
* Calls to action

#### Contact

* Contact page
* Contact form UI

### Also responsible for

* Migrating/cleaning existing website content
* Preparing images
* Writing page copy
* Connecting pages to Person 2's APIs
* Checking content accuracy

---

# OPTION C — 3-PERSON FEATURE TEAMS

Use this model if everyone wants to work on both frontend and backend.

Instead of assigning people by technology, assign them **features**.

## Person 1 — Public Website / Branding

### Pages

* Home
* Teams
* Coaches

### Responsibilities

* Branding
* Visual identity
* Shared components
* Team information
* Coach information
* Image galleries

---

## Person 2 — Events / Sponsors

### Pages

* Schedule
* Sponsors

### Responsibilities

* Competition data
* Event cards
* Schedule UI
* Sponsor database
* Sponsor cards/logos
* Sponsor management API
* Event management API

---

## Person 3 — Engagement / Backend

### Pages

* Donate
* Contact

### Responsibilities

* Contact form
* Newsletter
* Donation flow
* Backend infrastructure
* Database
* Email/API integrations
* Form submissions

---

# Recommended Choice

## If there are 2 people

Use **Option A**.

```text
PERSON 1
Frontend + Design
        │
        ├── Home
        ├── Teams
        ├── Coaches
        ├── Components
        └── Styling

PERSON 2
Backend + Pages
        │
        ├── Backend
        ├── Database
        ├── Sponsors
        ├── Schedule
        ├── Donate
        └── Contact
```

This gives Person 1 a frontend-heavy workload while Person 2 has a backend-heavy workload.

## If there are 3 people

Use **Option B** if the team wants clear technical ownership.

```text
             WEBSITE
                │
       ┌────────┼────────┐
       │        │        │
   FRONTEND   BACKEND   CONTENT
       │        │        │
       │        │        ├── Sponsors
       ├── Home │        ├── Schedule
       ├── Teams│        ├── Coaches
       │        │        ├── Donate
       │        │        └── Contact
       │        │
       └────────┴────────
        Shared Integration
```

Use **Option C** instead if everyone wants to become comfortable with the full stack.

---

# Git Workflow

## Branches

Never directly develop on `main`.

```text
main
│
├── feature/home
├── feature/teams
├── feature/sponsors
├── feature/schedule
├── feature/backend
├── feature/contact
└── feature/donate
```

Create a branch for each feature/page.

Example:

```bash
git checkout -b feature/schedule
```

When finished:

```text
feature/schedule
       ↓
Pull Request
       ↓
Code Review
       ↓
main
```

---

# Ownership Rules

Every major feature must have:

1. **One primary owner**
2. **One reviewer**
3. Clear completion criteria

Do not have two people independently build the same page.

### Before starting a page

Agree on:

* Page purpose
* Components needed
* API data required
* Mobile behavior
* Images/assets
* Content
* Completion criteria

---

# Definition of Done

A page is considered finished only when:

* [ ] Desktop layout works
* [ ] Mobile layout works
* [ ] Tablet layout works
* [ ] Components are reusable
* [ ] No duplicated navbar/footer
* [ ] TypeScript has no errors
* [ ] No console errors
* [ ] Images are optimized
* [ ] Links work
* [ ] Forms validate correctly
* [ ] API integration works
* [ ] Loading states exist where necessary
* [ ] Error states exist where necessary
* [ ] Accessibility has been checked
* [ ] Another team member has reviewed it

---

# Suggested Development Order

## Phase 1 — Foundation

1. Create repository
2. Set up React + TypeScript
3. Set up Tailwind
4. Establish colors/fonts/design system
5. Build Navbar
6. Build Footer
7. Build shared components
8. Establish backend
9. Establish database/API structure

## Phase 2 — Core Pages

1. Home
2. Teams
3. Coaches
4. Sponsors
5. Schedule
6. Contact
7. Donate

## Phase 3 — Integration

1. Connect frontend to APIs
2. Connect forms
3. Connect database
4. Add validation
5. Add loading/error states
6. Test mobile
7. Test accessibility

## Phase 4 — Launch

* [ ] Content review
* [ ] Image review
* [ ] Link review
* [ ] Mobile testing
* [ ] Desktop testing
* [ ] API testing
* [ ] Performance testing
* [ ] SEO metadata
* [ ] Production environment variables
* [ ] Deployment
* [ ] Final team review

---

# Important Principle

**Do not divide work purely by number of pages.**

A page like Home may require significantly more work than a simple Contact page.

Instead, balance:

```text
Pages
+
Frontend complexity
+
Backend complexity
+
Content migration
+
Testing
```

The goal is for each developer to have approximately equal **work**, not equal numbers of pages.

# Current Website Reference

The existing Steel Broncos Robotics website should be treated as the content/reference source during the rebuild.

Primary navigation currently includes:

* Home
* Teams
* Sponsors
* Schedule
* Coaches
* Donate
* Contact

The current homepage also contains the team's mission, social links, competition information, coach section, highlight reel, and newsletter signup.

The new implementation should preserve useful information while modernizing the design, architecture, responsiveness, and maintainability.
