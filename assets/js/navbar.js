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
    if(navLinks.getAttribute("data-visible") === "false") {
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
})

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
const headerObserver = new IntersectionObserver(entries =>
    entries.forEach(entry => {
        navBarContainer.setAttribute("data-nav-sticky", !entry.isIntersecting);
    }), {
        threshold: 1
    }
);

/**
 * Observe the Header
 */
headerObserver.observe(header);