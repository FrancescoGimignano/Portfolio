/**
 * Get all the sections
 */
const sections = document.querySelectorAll("section");
/**
 * Get the Header section, where the Navbar isn't visible
 */
const header = document.querySelector("header");
/**
 * Get the Navbar parent Div
 */
const navBarContainer = document.querySelector(".navbar");
/**
 * Get the Navbar container
 */
const navBar = document.querySelector("nav");
/**
 * Get the mobile Navbar button
 */
const navBtn = document.querySelector(".nav__btn");
/**
 * Get the Navbar items
 */
const navLinks = document.querySelector(".nav__links");

/**
 * Set the click listener for the mobile Navbar button
 */
navBtn.addEventListener("click", () => {
  if (navLinks.getAttribute("data-visible") === "false") {
    setVisible(true);
  } else {
    setVisible(false);
  }
});

/**
 * Close the Navbar on mobile if the user clicks on it
 */
navLinks.addEventListener("click", () => {
  setVisible(false);
});

/**
 * Close the Navbar on mobile if the window is resized
 */
window.addEventListener("resize", () => {
  setVisible(false);
});

/**
 * Set the Navbar visibility
 *
 * @param visible Navbar visibility
 */
function setVisible(visible) {
  navLinks.setAttribute("data-visible", visible);
  navBtn.setAttribute("aria-expanded", visible);
}

/**
 * Set the Navbar "sticky" when scrolling down from, or hide it if the user is fully in the Home Page
 */
const headerObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      navBarContainer.setAttribute("data-nav-sticky", !entry.isIntersecting);
    }),
  {
    threshold: 1,
  }
);

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
    threshold: 0.25,
  }
);

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    let navLink = navLinks.querySelector(`li a[href='#${entry.target.id}']`);
    if(navLink) {
      navLink.classList.toggle("active", entry.isIntersecting);
    }
  });
}, {
  threshold: 0.25
});

/**
 * Observe the Header
 */
headerObserver.observe(header);

/**
 * Observe the sections
 */
sections.forEach((section) => {
  firstActivationObserver.observe(section);
  sectionObserver.observe(section)
});
