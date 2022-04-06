const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");
const navBar = document.querySelector(".navbar");
const homeContent = document.querySelector("header .content");

navBtn.addEventListener("click", () => {
    if(navLinks.getAttribute("data-visible") === "false") {
        setVisible(true);
    } else {
        setVisible(false);
    }
});

navLinks.addEventListener("click", () => {
    setVisible(false);
})

window.addEventListener("resize", () => {
    setVisible(false);
});

function setVisible(visible) {
    navLinks.setAttribute("data-visible", visible);
    navBtn.setAttribute("aria-expanded", visible);
}

const homeContentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        navBar.classList.toggle("fixed", !entry.isIntersecting);
    });
}, {
    rootMargin: "-200px 0px 0px 0px"
});

homeContentObserver.observe(homeContent);