// Get the Header section, to show/hide the Navbar
const header = document.querySelector("header");
// Get the Navbar container
const navBarContainer = document.querySelector("[data-element='navbar']");
// Get the Navbar
const navBar = document.querySelector("nav");
// Get the mobile Navbar button
const navBarButton = document.querySelector("[data-button='nav']");
// Get the Navbar menu
const navBarMenu = document.getElementById("primary-navigation");
// Get the sections
const sections = document.querySelectorAll("section");
// Get all the popups
const popups = document.querySelectorAll(".pop-up");

// #region Navbar

/**
 * Set the Navbar "sticky" when scrolling down from, or hide it if the user is fully in the Home Page
 */
const headerObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      navBarContainer.setAttribute("data-nav-sticky", !entry.isIntersecting);
      if(entry.isIntersecting) {
        setVisible(false);
      }
    }),
  { threshold: 1 }
);

/**
 * Set the click listener for the mobile Navbar button
 */
navBarButton.addEventListener("click", () => {
  setVisible(navBarMenu.getAttribute("data-visible") === "false");
});

/**
 * Close the Navbar on mobile if the user clicks on it
 */
navBarMenu.addEventListener("click", () => {
  setVisible(false);
});

/**
 * Close the Navbar menu on mobile if the window is resized
 */
window.addEventListener("resize", () => {
  setVisible(false);
});

/**
 * Set the Navbar menu visibility
 *
 * @param visible Navbar menu visibility
 */
function setVisible(visible) {
  navBarMenu.setAttribute("data-visible", visible);
  navBarButton.setAttribute("aria-expanded", visible);
}

/**
 * Observe the Header
 */
headerObserver.observe(header);

//#endregion

// #region Sections

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
  { threshold: 0.25 }
);

/**
 * Trigger pop up when the element is being displayed for the first time
 */
 const popUpActivationObserver = new IntersectionObserver(
  (entries, sectionObserver) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        let target = entry.target;
        target.classList.add("popped");
        sectionObserver.unobserve(target);
      });
  },
  { threshold: 0.25 }
);

/**
 * Se the section Navbar link active
 */
const sectionNavbarObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      let navLink = navBarMenu.querySelector(
        `li a[href='#${entry.target.id}']`
      );
      if (navLink) {
        navLink.classList.toggle("active", entry.isIntersecting);
      }
    });
  },
  { threshold: 0.25 }
);

/**
 * Observe the sections
 */
sections.forEach(section => {
  firstActivationObserver.observe(section);
  sectionNavbarObserver.observe(section);
});

/**
 * Observe the popups
 */
 popups.forEach(popUp => popUpActivationObserver.observe(popUp));

// #endregion
