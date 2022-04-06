const sections = document.querySelectorAll("main section");

const sectionsNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let location = `#${entry.target.id}`;
        document.querySelector(`.nav__links li a[href='${location}']`).classList.toggle("active", entry.isIntersecting);
    });
}, {
    threshold: 1
});

const sectionObserver = new IntersectionObserver((entries, sectionObserver) => {
    entries.filter(entry => entry.isIntersecting).forEach(entry => {
        let target = entry.target;
        target.classList.add("active");
        sectionObserver.unobserve(target);
    });
}, {
    threshold: 0.25
});

sections.forEach(section => sectionsNavObserver.observe(section));
sections.forEach(section => sectionObserver.observe(section));