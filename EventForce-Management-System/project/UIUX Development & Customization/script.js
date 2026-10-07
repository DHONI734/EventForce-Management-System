// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// ==========================================
// LIGHTNING APP PAGE SWITCHING
// ==========================================

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".app-page");

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    // Update page title

    const titles = {

        overview: "EventForce Overview",

        events: "Event Management",

        participants: "Participant Management",

        venues: "Venue Management",

        expenses: "Expense Management",

        reportsPage: "Reports",

        settings: "Application Settings"

    };


    document.getElementById("pageTitle").innerText =
        titles[pageId];


    // Active sidebar item

    const sidebarLinks =
        document.querySelectorAll(".sidebar a");

    sidebarLinks.forEach(link => {

        link.classList.remove("active");

    });


    event.currentTarget.classList.add("active");

}


// ==========================================
// CREATE EVENT
// ==========================================

function createEvent() {

    const eventName =
        prompt("Enter the new event name:");

    if (eventName && eventName.trim() !== "") {

        alert(
            "Event '" +
            eventName +
            "' has been created successfully!"
        );

    }

}


// ==========================================
// REPORT GENERATION
// ==========================================

function generateReport(type) {

    alert(
        type +
        " Report is being generated..."
    );

}


// ==========================================
// DASHBOARD FILTER
// ==========================================

function updateDashboard() {

    const filter =
        document.getElementById(
            "dashboardFilter"
        ).value;

    const eventCount =
        document.getElementById("eventCount");

    const participantCount =
        document.getElementById(
            "participantCount"
        );


    if (filter === "month") {

        eventCount.innerText = "24";

        participantCount.innerText = "1,284";

    }

    else if (filter === "quarter") {

        eventCount.innerText = "68";

        participantCount.innerText = "3,942";

    }

    else {

        eventCount.innerText = "246";

        participantCount.innerText = "14,820";

    }

}


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

window.addEventListener(
    "scroll",
    function () {

        const navbar =
            document.querySelector(".navbar");

        if (window.scrollY > 70) {

            navbar.style.background =
                "rgba(4, 11, 18, 0.98)";

        }

        else {

            navbar.style.background =
                "rgba(7, 16, 27, 0.94)";

        }

    }
);


// ==========================================
// ANIMATED DASHBOARD COUNTERS
// ==========================================

function animateNumber(
    element,
    target,
    duration = 1000
) {

    let start = 0;

    const increment =
        target / (duration / 20);

    const timer =
        setInterval(() => {

            start += increment;

            if (start >= target) {

                element.innerText =
                    target.toLocaleString();

                clearInterval(timer);

            }

            else {

                element.innerText =
                    Math.floor(start)
                    .toLocaleString();

            }

        }, 20);

}


// Start counter when dashboard is visible

const dashboard =
    document.querySelector(
        ".dashboard-section"
    );

const observer =
    new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                animateNumber(
                    document.getElementById(
                        "eventCount"
                    ),
                    24
                );

                animateNumber(
                    document.getElementById(
                        "participantCount"
                    ),
                    1284
                );

                observer.disconnect();

            }

        },
        {
            threshold: 0.25
        }
    );


observer.observe(dashboard);