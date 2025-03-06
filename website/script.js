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

    let typingInterval; // Variable to track the interval
    let isTyping = false; // Flag to prevent multiple animations

    function typeWriterEffect(text, element, speed = 50) {
        let i = 0;
        clearInterval(typingInterval); // Stop any ongoing typing animation
        isTyping = true;
        element.textContent = ""; // Reset text before typing

        typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval); // Stop the animation when done
                isTyping = false;
            }
        }, speed);
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (!isTyping) { // Prevent new typing if one is already running
                const lang = button.getAttribute("data-language");
                typeWriterEffect(languageInfo[lang], description);
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" },
            });

            if (response.ok) {
                responseMessage.textContent = "Your message has been sent successfully!";
                responseMessage.style.color = "#00bcd4";
                form.reset(); // Clear the form after submission
            } else {
                responseMessage.textContent = "Oops! Something went wrong. Try again.";
                responseMessage.style.color = "red";
            }
        } catch (error) {
            responseMessage.textContent = "Failed to send message.";
            responseMessage.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down → Hide navbar
            navbar.classList.add("nav-hidden");
        } else {
            // Scrolling up → Show navbar
            navbar.classList.remove("nav-hidden");
        }
        lastScrollY = window.scrollY;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTop = document.getElementById("scrollToTop");

    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
