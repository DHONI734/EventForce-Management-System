// ==========================================
// MOBILE NAVIGATION
// ==========================================

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


// Close mobile navigation after clicking

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


// ==========================================
// SECURITY DETAILS
// ==========================================

function showSecurity(type) {

    const details = {

        "Profile":
            "Profile controls the user's basic permissions, object access and system permissions.",

        "Role":
            "Role determines record visibility through the Salesforce role hierarchy.",

        "User":
            "Users represent individuals who log into and interact with the EventForce Salesforce organization.",

        "Permission Set":
            "Permission Sets provide additional permissions to selected users without modifying their profile.",

        "Sharing Settings":
            "Sharing Settings control record-level access and define how EventForce records are shared."
    };


    alert(
        "EventForce Security\n\n" +
        type +
        "\n\n" +
        details[type]
    );

}


// ==========================================
// MIGRATION PROGRESS ANIMATION
// ==========================================

const progress =
    document.getElementById("progress");

const progressText =
    document.getElementById("progressText");


let currentProgress = 0;

const targetProgress = 82;


const progressObserver =
    new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                const timer =
                    setInterval(() => {

                        currentProgress++;

                        progress.style.width =
                            currentProgress + "%";

                        progressText.innerText =
                            currentProgress + "%";


                        if (
                            currentProgress >=
                            targetProgress
                        ) {

                            clearInterval(timer);

                        }

                    }, 20);

                progressObserver.disconnect();

            }

        },

        {
            threshold: 0.5
        }

    );


progressObserver.observe(
    document.querySelector(
        ".progress-container"
    )
);


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (window.scrollY > 70) {

            navbar.style.background =
                "rgba(4, 11, 18, 0.98)";

        }

        else {

            navbar.style.background =
                "rgba(7, 16, 27, 0.95)";

        }

    }
);


// ==========================================
// SECURITY CARD ANIMATION
// ==========================================

const cards =
    document.querySelectorAll(
        ".security-card, .test-card, .migration-card"
    );


const cardObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    cardObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    cardObserver.observe(card);

});