const images = document.querySelectorAll("[data-src]");

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
        preLoadImage(entry.target);
        imageObserver.unobserve(entry.target);
    });
}, {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
});

function preLoadImage(image) {
    const src = image.getAttribute("data-src");
    if(!src) {
        return;
    }
    image.src = src;
}

images.forEach(image => imageObserver.observe(image));