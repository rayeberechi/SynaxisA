// script.js

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    
    // --- Theme Toggle Functionality ---
    const themeSwitcher = document.querySelector(".theme-switcher");
    const themeIcon = themeSwitcher ? themeSwitcher.querySelector("i") : null;

    const applyTheme = (theme) => {
        if (theme === "dark") {
            body.classList.add("dark-mode");
            if (themeIcon) themeIcon.className = "fas fa-sun";
        } else {
            body.classList.remove("dark-mode");
            if (themeIcon) themeIcon.className = "fas fa-moon";
        }
    };

    // Check for saved theme in localStorage on page load
    const savedTheme = localStorage.getItem("synaxisa-theme") || "light";
    applyTheme(savedTheme);

    if (themeSwitcher) {
        themeSwitcher.addEventListener("click", () => {
            const isDarkMode = body.classList.contains("dark-mode");
            if (isDarkMode) {
                applyTheme("light");
                localStorage.setItem("synaxisa-theme", "light");
            } else {
                applyTheme("dark");
                localStorage.setItem("synaxisa-theme", "dark");
            }
        });
    }

    // --- Mobile Menu Functionality ---
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", () => {
            mobileMenu.classList.add("open");
        });
    }

    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    }
});