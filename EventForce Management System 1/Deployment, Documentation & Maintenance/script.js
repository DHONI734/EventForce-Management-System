// ==========================================
// MOBILE MENU
// ==========================================

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");

    menu.classList.toggle("active");

}


document.querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navMenu")
                .classList.remove("active");

        });

    });


// ==========================================
// DOCUMENTATION POPUP
// ==========================================

function showDoc(type) {

    const content = {

        "Project Report":
            "Include project objectives, requirements, Salesforce implementation, testing results and conclusion.",

        "System Architecture":
            "Document objects, fields, relationships, flows, Apex classes, reports and dashboards.",

        "Security Documentation":
            "Document profiles, roles, users, permission sets, sharing settings and access controls.",

        "Testing Documentation":
            "Include test scenarios, test cases, expected results, actual results and defect resolution."
    };


    alert(
        "EVENTFORCE DOCUMENTATION\n\n" +
        type +
        "\n\n" +
        content[type]
    );

}


// ==========================================
// DEMO VIDEO SIMULATION
// ==========================================

let demoRunning = false;

let demoTimer;

let demoSeconds = 0;

const demoDuration = 60;


function startDemo() {

    if (demoRunning) {
        return;
    }

    demoRunning = true;

    const screen =
        document.getElementById("videoScreen");

    const progress =
        document.getElementById(
            "timelineProgress"
        );

    const time =
        document.getElementById("videoTime");


    screen.innerHTML = `

        <div class="play-button">
            ❚❚
        </div>

        <h3>
            EventForce Demo Running
        </h3>

        <p>
            Demonstrating Salesforce functionality...
        </p>

    `;


    demoTimer = setInterval(() => {

        demoSeconds++;

        const percent =
            (demoSeconds / demoDuration) * 100;

        progress.style.width =
            percent + "%";


        const minutes =
            Math.floor(demoSeconds / 60);

        const seconds =
            demoSeconds % 60;


        time.innerText =
            String(minutes).padStart(2, "0")
            + ":" +
            String(seconds).padStart(2, "0");


        if (demoSeconds >= demoDuration) {

            clearInterval(demoTimer);

            demoRunning = false;

            demoSeconds = 0;

            progress.style.width = "0%";

            time.innerText = "00:00";


            screen.innerHTML = `

                <div class="play-button"
                     onclick="startDemo()">
                    ▶
                </div>

                <h3>
                    Demo Completed
                </h3>

                <p>
                    Click to replay the EventForce demonstration.
                </p>

            `;

        }

    }, 1000);

}


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
                "rgba(3, 10, 17, 0.98)";

        }

        else {

            navbar.style.background =
                "rgba(5, 13, 21, 0.95)";

        }

    }
);


// ==========================================
// CARD REVEAL ANIMATION
// ==========================================

const cards =
    document.querySelectorAll(
        ".deploy-card, .doc-card, .monitor-item, .workflow-step"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
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
        "opacity .7s ease, transform .7s ease";

    observer.observe(card);

});


// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href")
                === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    }
);