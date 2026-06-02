"use client";

import { useEffect } from "react";

const SELECTOR = ".anim, .level-row, .comp-table tr";

export default function ScrollAnimator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const observed = new WeakSet<Element>();

    function observeAll() {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el);
          observer.observe(el);
        }
      });
    }

    observeAll();

    // Re-observe when DOM changes (e.g. Levels filter re-renders new elements)
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
