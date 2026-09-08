// Dark Mode Toggle using LocalStorage
var themeButton = document.getElementById("theme-btn");

// Check if dark mode was saved previously
if (localStorage.getItem("siteTheme") === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        
        // Save user preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("siteTheme", "dark");
        } else {
            localStorage.setItem("siteTheme", "light");
        }
    });
}

// Simple Form Validation
var contactForm = document.getElementById("my-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        var nameInput = document.getElementById("name").value;
        var emailInput = document.getElementById("email").value;
        var messageInput = document.getElementById("message").value;
        var errorText = document.getElementById("error-text");

        // Basic check for empty fields or missing @ in email
        if (nameInput === "" || emailInput === "" || messageInput === "") {
            event.preventDefault(); // stop form submission
            errorText.style.color = "red";
            errorText.textContent = "Please fill out all fields before submitting.";
        } else if (emailInput.indexOf("@") === -1) {
            event.preventDefault(); // stop form submission
            errorText.style.color = "red";
            errorText.textContent = "Please enter a valid email address with an @ symbol.";
        } else {
            event.preventDefault(); // stop submit for preview testing
            errorText.style.color = "green";
            errorText.textContent = "Thank you! Your message has been sent.";
        }
    });
}
