/**
 * Get all the sections
 */
const sections = document.querySelectorAll("section");

/**
 * Trigger animations when a section is being displayed for the first time
 */
const firstActivationObserver = new IntersectionObserver(
  (entries, sectionObserver) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        let target = entry.target;
        target.classList.add("active");
        sectionObserver.unobserve(target);
      });
  },
  {
    threshold: 0.25
  }
);

/**
 * Observe the sections
 */
sections.forEach(section => firstActivationObserver.observe(section));