/**
 * Get all the Images with the [data-src] attribute
 */
const images = document.querySelectorAll("[data-src]");

/**
 * Observe the images so when they are about to be visibile they are loaded in
 */
const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
        preLoadImage(entry.target);
        imageObserver.unobserve(entry.target);
    });
}, {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
});

/**
 * Set the image [src] attribute with the content of the [data-src] attribute
 * 
 * @param image Image to load
 */
function preLoadImage(image) {
    const src = image.getAttribute("data-src");
    if(!src) {
        return;
    }
    image.src = src;
}

/**
 * Observe the images
 */
images.forEach(image => imageObserver.observe(image));