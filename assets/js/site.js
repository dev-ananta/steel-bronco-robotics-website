(() => {
  const root = document.documentElement;
  const page = document.body.dataset.page;
  const current = document.querySelector(`[data-page="${page}"]`);
  if (current) current.setAttribute('aria-current', 'page');

  const menu = document.querySelector('[data-menu]');
  const nav = document.querySelector('[data-nav]');
  const theme = document.querySelector('[data-theme-toggle]');

  if (menu && nav) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
    };
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const storedTheme = localStorage.getItem('sbr-theme');
  if (storedTheme === 'dark') root.dataset.theme = 'dark';

  if (theme) {
    const updateLabel = () => {
      const dark = root.dataset.theme === 'dark';
      theme.setAttribute('aria-label', dark ? 'Use light theme' : 'Use dark theme');
      theme.textContent = dark ? 'Light' : 'Dark';
    };
    theme.addEventListener('click', () => {
      const dark = root.dataset.theme === 'dark';
      if (dark) delete root.dataset.theme;
      else root.dataset.theme = 'dark';
      localStorage.setItem('sbr-theme', dark ? 'light' : 'dark');
      updateLabel();
    });
    updateLabel();
  }
})();
