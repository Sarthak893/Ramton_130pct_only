import { useEffect, useRef } from 'react';

export default function useReveal(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll('.reveal'));
    if (els.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in'));
      return;
    }

    const vh = window.innerHeight;

    // Step 1 — synchronously add .in to every element already in the viewport.
    els.forEach(el => {
      const { top, bottom } = el.getBoundingClientRect();
      if (top < vh && bottom > 0) el.classList.add('in');
    });

    // Step 2 — only NOW mark the page as animation-ready.
    // CSS only hides .reveal elements when body has .js-reveal-ready,
    // so visible elements (which already have .in) are never hidden.
    document.body.classList.add('js-reveal-ready');

    // Step 3 — observe off-screen elements and animate them in on scroll.
    const offscreen = els.filter(el => !el.classList.contains('in'));

    if (offscreen.length === 0) return;

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    offscreen.forEach(el => io.observe(el));

    return () => {
      io.disconnect();
      document.body.classList.remove('js-reveal-ready');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
