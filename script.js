/* script.js */

document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll Navigation (optional enhancement)
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = contactForm.querySelector("#name").value.trim();
            const email = contactForm.querySelector("#email").value.trim();
            const message = contactForm.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert("Please fill in all fields before submitting.");
            }
        });
    }

    // Newsletter Form Validation
    const newsletterForm = document.querySelector(".newsletter form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            const emailInput = newsletterForm.querySelector("input[name='newsletter']").value.trim();
            if (!emailInput) {
                e.preventDefault();
                alert("Please enter your email to subscribe.");
            }
        });
    }
});
