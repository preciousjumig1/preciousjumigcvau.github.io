// script.js

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to highlight the active link based on scroll position
    function highlightNavLink() {
        const scrollPosition = window.scrollY;

        // Iterate through each section and highlight the corresponding link
        document.querySelectorAll('section').forEach((section, index) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach((link) => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }

    // Add event listener for scroll events
    window.addEventListener('scroll', highlightNavLink);

    // Initial highlighting
    highlightNavLink();
});
