const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}


// Search anime cards

const searchInput = document.querySelector("#searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".anime-card");

        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// Contact form

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        contactForm.reset();
    });
}