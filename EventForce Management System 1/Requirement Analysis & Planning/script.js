// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav-links")
            .classList.remove("active");

    });

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(counter.getAttribute("data-target"));

                let current = 0;

                const increment = target / 50;

                function updateCounter() {

                    current += increment;

                    if (current < target) {

                        counter.innerText =
                            Math.ceil(current);

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText = target;

                    }
                }

                updateCounter();

                observer.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    }
);


counters.forEach(counter => {
    observer.observe(counter);
});


// ===============================
// NAVBAR BACKGROUND ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(8, 12, 16, 0.98)";

    } else {

        header.style.background = "rgba(10, 15, 22, 0.90)";

    }

});