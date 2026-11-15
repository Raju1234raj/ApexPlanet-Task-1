
/* =========================================
   1. MOBILE NAVIGATION MENU
========================================= */

// Select the menu button
const menuBtn = document.getElementById("menuBtn");

// Select the navigation menu
const navLinks = document.getElementById("navLinks");


// Open and close the mobile menu
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Update accessibility information
    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    // Change menu icon
    menuBtn.textContent = isOpen ? "✕" : "☰";

});



/* =========================================
   2. CLOSE MENU AFTER CLICKING A LINK
========================================= */

// Select all navigation links
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";

    });

});



/* =========================================
   3. SAY HELLO BUTTON
========================================= */

// Select the contact button
const contactBtn = document.getElementById("contactBtn");

// Display a message when the button is clicked
contactBtn.addEventListener("click", function () {

    alert(
        "Hello! Thank you for visiting my portfolio. " +
        "I appreciate your interest in my work."
    );

});



/* =========================================
   4. ACTIVE NAVIGATION LINK
========================================= */

// Select all main sections
const sections = document.querySelectorAll("main section");

// Highlight the navigation link for the current section
window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});



/* =========================================
   5. LINKEDIN PLACEHOLDER
========================================= */

// Select the LinkedIn link
const linkedinLink = document.getElementById("linkedinLink");

// Show a message until the LinkedIn profile is created
linkedinLink.addEventListener("click", function (event) {

    if (linkedinLink.getAttribute("href") === "#") {

        event.preventDefault();

        alert(
            "My LinkedIn profile will be available soon. " +
            "Please check back later!"
        );

    }

});



/* =========================================
   6. AUTOMATIC COPYRIGHT YEAR
========================================= */

// Select footer paragraphs
const footerParagraphs = document.querySelectorAll(".footer p");

// Update the copyright year automatically
if (footerParagraphs.length > 1) {

    footerParagraphs[1].innerHTML =
        "Copyright &copy; " +
        new Date().getFullYear() +
        ". All Rights Reserved.";

}
