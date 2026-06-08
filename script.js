const PAGE_META = {
  en: {
    title: 'Matvey Matveev — Gameplay Designer',
    description: 'Technical game designer focused on game mechanics, Unreal Engine 5, and Unity.',
  },
  ru: {
    title: 'Матвей Матвеев — Gameplay Designer',
    description: 'Технический геймдизайнер с фокусом на игровые механики, Unreal Engine 5 и Unity.',
  },
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n-en]').forEach((el) => {
    const text = el.getAttribute(`data-i18n-${lang}`);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-aria-en]').forEach((el) => {
    const label = el.getAttribute(`data-i18n-aria-${lang}`);
    if (label) el.setAttribute('aria-label', label);
  });

  document.querySelectorAll('[data-i18n-title-en]').forEach((el) => {
    const title = el.getAttribute(`data-i18n-title-${lang}`);
    if (title) el.setAttribute('title', title);
  });

  document.title = PAGE_META[lang].title;
  document.querySelector('meta[name="description"]').content = PAGE_META[lang].description;

  const toggle = document.getElementById('lang-toggle');
  if (lang === 'en') {
    toggle.textContent = 'RU';
    toggle.setAttribute('aria-label', 'Switch to Russian');
  } else {
    toggle.textContent = 'EN';
    toggle.setAttribute('aria-label', 'Switch to English');
  }
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLang(currentLang === 'en' ? 'ru' : 'en');
});

if (currentLang !== 'en') {
  setLang(currentLang);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.style.background = 'rgba(8, 8, 8, 0.92)';
    header.style.backdropFilter = 'blur(8px)';
  } else {
    header.style.background = 'linear-gradient(to bottom, #080808 60%, transparent)';
    header.style.backdropFilter = 'none';
  }
}, { passive: true });
