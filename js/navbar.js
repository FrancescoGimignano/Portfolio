const navBtn = document.querySelector(".nav__btn");
const navLinks = document.querySelector(".nav__links");

navBtn.addEventListener('click', () => {
    if(navLinks.getAttribute('data-visible') === "false") {
        setVisible(true);
    } else {
        setVisible(false);
    }
});

navLinks.addEventListener('click', () => {
    setVisible(false);
})

window.addEventListener("resize", () => {
    setVisible(false);
});

function setVisible(visible) {
    navLinks.setAttribute('data-visible', visible);
    navBtn.setAttribute('aria-expanded', visible);
}