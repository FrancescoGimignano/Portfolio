/**
 * Timeout before cleaning out the next animations
 */
let resizeTimer;
/**
 * Reset animations on load
 */
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(_ => document.body.classList.remove("resize-animation-stopper"), 400);
});