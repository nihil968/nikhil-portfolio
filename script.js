// ======================
// Mobile Menu
// ======================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(
    ".about, .skills, .projects, .experience, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach((section) => {
    section.classList.add("hidden");

    observer.observe(section);
});

// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typing-text");

const texts = [
    "I build websites.",
    "I build software.",
    "I create digital experiences."
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();

// =========================
// BACK TO TOP
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("visible");

    } else {

        topBtn.classList.remove("visible");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});