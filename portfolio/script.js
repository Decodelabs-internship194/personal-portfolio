
// =========================
// MOBILE NAVIGATION
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields before submitting.";

        return;
    }


    // Basic email validation

    if (!email.includes("@") || !email.includes(".")) {

        formMessage.textContent =
            "Please enter a valid email address.";

        return;
    }


    // Successful submission message

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    contactForm.reset();

});
