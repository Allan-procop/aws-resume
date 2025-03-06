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

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".language-btn");
    const description = document.getElementById("language-description");

    const languageInfo = {
        portuguese: "Portuguese is my native language. I speak and write it fluently.",
        english: "I am fluent in English, both written and spoken, and use it daily in my work.",
    };

    function typeWriterEffect(text, element, speed = 50) {
        let i = 0;
        element.textContent = ""; // Clear previous text
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const lang = button.getAttribute("data-language");
            typeWriterEffect(languageInfo[lang], description);
        });
    });
});
