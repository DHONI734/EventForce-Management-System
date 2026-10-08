// ======================================
// MOBILE NAVIGATION
// ======================================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu when a link is clicked

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", function () {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ======================================
// NAVBAR SCROLL EFFECT
// ======================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(5, 12, 20, 0.98)";

    } else {

        navbar.style.background =
            "rgba(8, 17, 28, 0.94)";

    }

});


// ======================================
// REVEAL ANIMATION
// ======================================

const cards = document.querySelectorAll(
    ".config-card, .object-card, .feature, .timeline-item, .async-card"
);

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(card => {

    card.classList.add("reveal");

    revealObserver.observe(card);

});


// ======================================
// SYSTEM FLOW INTERACTION
// ======================================

const flowBoxes = document.querySelectorAll(".flow-box");

flowBoxes.forEach(box => {

    box.addEventListener("click", function () {

        const name = this.innerText;

        alert(
            "EventForce Backend Module: " + name
        );

    });

});


// ======================================
// CURRENT YEAR
// ======================================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        "© " + new Date().getFullYear() +
        " EventForce Management System";

}