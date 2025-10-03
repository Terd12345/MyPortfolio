function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const desktopNav = document.getElementById('desktop-nav');
  const hamburgerNav = document.getElementById('hamburger-nav');
  const threshold = 10; // adjust as needed

  // ensure nav exists
  if (!desktopNav && !hamburgerNav) return;

  // start with 'solid' so page load at top is solid
  desktopNav?.classList.add('solid');
  hamburgerNav?.classList.add('solid');

  function updateNavOnScroll() {
    const y = window.scrollY || window.pageYOffset;

    if (y > threshold) {
      // scrolled down -> apply transparent look
      desktopNav?.classList.add('transparent');
      desktopNav?.classList.remove('solid');
      hamburgerNav?.classList.add('transparent');
      hamburgerNav?.classList.remove('solid');
    } else {
      // at very top -> solid
      desktopNav?.classList.add('solid');
      desktopNav?.classList.remove('transparent');
      hamburgerNav?.classList.add('solid');
      hamburgerNav?.classList.remove('transparent');
    }
  }

  // initialize state and then enable transitions to avoid flicker
  updateNavOnScroll();
  requestAnimationFrame(() => {
    desktopNav?.classList.add('ready');
    hamburgerNav?.classList.add('ready');
  });

  window.addEventListener('scroll', updateNavOnScroll, { passive: true });
});

// Smooth scroll handlers for arrow icons (and any element with data-target)
document.addEventListener('DOMContentLoaded', () => {
  const scrollTriggers = document.querySelectorAll('[data-target]');

  if (!scrollTriggers || scrollTriggers.length === 0) return;

  function activateTrigger(el) {
    const targetSelector = el.getAttribute('data-target');
    if (!targetSelector) return;
    const target = document.querySelector(targetSelector);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollTriggers.forEach((el) => {
    // mouse click
    el.addEventListener('click', (e) => {
      e.preventDefault();
      activateTrigger(el);
    });

    // keyboard (Enter or Space)
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateTrigger(el);
      }
    });
  });
});
