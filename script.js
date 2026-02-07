// Theme auto-switch by time
const hour = new Date().getHours();
const prefersDark = hour >= 18 || hour < 6;
document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';

const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
});

// Counter animation
const counters = document.querySelectorAll('[data-count]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      let start = 0;
      const end = +el.dataset.count;
      const interval = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= end) clearInterval(interval);
      }, 40);
      observer.unobserve(el);
    }
  });
});
counters.forEach(c => observer.observe(c));
