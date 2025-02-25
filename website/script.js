document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth',
            });
        });
    });

    // Typewriter effect for the intro text
    const textArray = ["Cybersecurity Student", "Cloud Security Specialist"];
    let textIndex = 0;
    let charIndex = 0;
    const typewriterElement = document.querySelector(".typewriter");

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 70);
        } else {
            setTimeout(eraseEffect, 1500);
        }
    }

    function eraseEffect() {
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseEffect, 50);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 300);
        }
    }

    setTimeout(typeEffect, 500);
});
