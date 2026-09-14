(function () {
    const data = window.SBR_DATA;
    const root = document.documentElement;

    function icon(name) {
        const paths = {
            instagram:
                '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>',
            facebook:
                '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v5h4v-5h3.2l.8-4H13V9c0-.7.3-1 1-1Z"></path></svg>',
            x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.2l3.2 4.6L16.3 4H19l-5.4 6.1L19.5 20h-4.2l-3.7-5.3L7.5 20H4.8l5.8-6.7L5 4Zm3.4 1.9 7.8 12.2h.9L9.3 5.9h-.9Z"></path></svg>',
        };
        return paths[name] || "";
    }

    function renderShell() {
        const header = document.querySelector("[data-site-header]");
        if (header) {
            header.innerHTML = `
        <header class="site-header">
          <a class="brand" href="index.html" aria-label="Steel Broncos Robotics home">
            <img class="brand-mark" src="assets/images/brand/icon.png" alt="Steel Broncos Robotics logo">
            <span><strong>Steel Broncos</strong><small>Robotics · FRC 8029</small></span>
          </a>
          <button class="menu-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
          <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
            <a href="index.html">Home</a>
            <a href="team.html">Team</a>
            <a href="impact.html">Impact</a>
            <a href="sponsors.html">Sponsors</a>
            <a href="history.html">History</a>
            <a href="contact.html" class="nav-cta">Support us</a>
          </nav>
          <button class="theme-toggle" type="button" aria-label="Toggle dark mode">◐</button>
        </header>`;
        }

        const footer = document.querySelector("[data-site-footer]");
        if (footer) {
            footer.innerHTML = `
        <footer class="site-footer">
          <div class="footer-grid">
            <div><span class="eyebrow">FRC 8029</span><h2>Build robots. Build people.</h2><p>Steel Broncos Robotics gives students a place to learn engineering, teamwork, leadership, and problem-solving through competition.</p></div>
            <div><span class="eyebrow">Explore</span><a href="team.html">Meet the team</a><a href="impact.html">Our impact</a><a href="sponsors.html">Sponsorship</a><a href="history.html">Program history</a></div>
            <div><span class="eyebrow">Connect</span><a href="mailto:${data.team.email}">${data.team.email}</a><div class="socials">${data.social.map((s) => `<a href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}">${icon(s.icon)}</a>`).join("")}</div></div>
          </div>
          <div class="footer-bottom"><span>© ${new Date().getFullYear()} Steel Broncos Robotics</span><span>Designed for students, sponsors, and community partners.</span></div>
        </footer>`;
        }
    }

    function renderSocial() {
        document.querySelectorAll("[data-social]").forEach((el) => {
            el.innerHTML = data.social
                .map(
                    (s) =>
                        `<a class="social-pill" href="${s.href}" target="_blank" rel="noopener">${icon(s.icon)}<span>${s.label}</span></a>`,
                )
                .join("");
        });
    }

    function renderMentors() {
        document.querySelectorAll("[data-mentors]").forEach((el) => {
            el.innerHTML = data.mentors
                .map(
                    (m) => `
        <article class="person-card">
          <div class="person-photo ${m.image ? "" : "photo-placeholder"}">${m.image ? `<img src="${m.image}" alt="${m.name}" loading="lazy" decoding="async">` : "<span>PHOTO</span>"}</div>
          <div class="person-body"><span class="eyebrow">${m.role}</span><h3>${m.name}</h3><p>${m.focus}</p>${m.email ? `<a class="text-link" href="mailto:${m.email}">Email ${m.name.split(" ")[0]} →</a>` : ""}</div>
        </article>`,
                )
                .join("");
        });
    }

    function renderSponsors() {
        document.querySelectorAll("[data-sponsors]").forEach((el) => {
            el.innerHTML = data.sponsors
                .map(
                    (s) =>
                        `<article class="sponsor-card"><div class="sponsor-logo">${s.image ? `<img src="${s.image}" alt="${s.name}" loading="lazy" decoding="async">` : `<span>${s.name}</span>`}</div><div><span class="eyebrow">${s.tier}</span><h3>${s.name}</h3></div></article>`,
                )
                .join("");
        });
    }

    function renderGallery() {
        document.querySelectorAll("[data-gallery]").forEach((el) => {
            el.innerHTML = data.gallery
                .map(
                    (g, i) =>
                        `<figure class="gallery-item ${i === 0 ? "gallery-feature" : ""}"><img src="${g.src}" alt="${g.alt}" loading="${i === 0 ? "eager" : "lazy"}" fetchpriority="${i === 0 ? "high" : "auto"}" decoding="async"><figcaption>${g.label}</figcaption></figure>`,
                )
                .join("");
        });
    }

    function renderTeam() {
        document.querySelectorAll("[data-team-grid]").forEach((el) => {
            if (!data.teamMembers.length) {
                el.innerHTML = `<div class="empty-state"><span class="eyebrow">Roster photos needed</span><h3>The professional roster is ready for your approved headshots.</h3><p>Add each member to <code>assets/js/data.js</code> and place their optimized WebP photo in <code>assets/images/members/</code>. The cards will automatically populate here.</p></div>`;
                return;
            }
            el.innerHTML = data.teamMembers
                .map(
                    (m) =>
                        `<article class="person-card team-card"><div class="person-photo"> <img src="${m.image}" alt="${m.name}" loading="lazy" decoding="async" width="720" height="900"></div><div class="person-body"><span class="eyebrow">${m.role}</span><h3>${m.name}</h3><p>${m.bio}</p><div class="tag-row">${(m.skills || []).map((x) => `<span>${x}</span>`).join("")}</div></div></article>`,
                )
                .join("");
        });
    }

    function renderSeasons() {
        document.querySelectorAll("[data-seasons]").forEach((el) => {
            el.innerHTML = data.seasons
                .map(
                    (s, i) =>
                        `<article class="timeline-item"><div class="timeline-year">${s.year}</div><div><span class="eyebrow">${i === 0 ? "Recent season" : "Program history"}</span><h3>${s.title}</h3><p>${s.description}</p><div class="tag-row">${s.highlights.map((x) => `<span>${x}</span>`).join("")}</div></div></article>`,
                )
                .join("");
        });
    }

    function setupTheme() {
        const stored = localStorage.getItem("sbr-theme");
        if (stored === "dark" || (!stored && matchMedia("(prefers-color-scheme: dark)").matches))
            root.dataset.theme = "dark";
        document.querySelectorAll(".theme-toggle").forEach((btn) =>
            btn.addEventListener("click", () => {
                root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
                localStorage.setItem("sbr-theme", root.dataset.theme);
            }),
        );
    }

    function setupMenu() {
        const btn = document.querySelector(".menu-toggle");
        const nav = document.querySelector(".site-nav");
        if (!btn || !nav) return;
        btn.addEventListener("click", () => {
            const open = nav.classList.toggle("is-open");
            btn.setAttribute("aria-expanded", open);
        });
    }

    function markActiveNav() {
        const page = location.pathname.split("/").pop() || "index.html";
        document.querySelectorAll(".site-nav a").forEach((a) => {
            if (a.getAttribute("href") === page) a.setAttribute("aria-current", "page");
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        renderShell();
        renderSocial();
        renderMentors();
        renderSponsors();
        renderGallery();
        renderTeam();
        renderSeasons();
        setupTheme();
        setupMenu();
        markActiveNav();
    });
})();
