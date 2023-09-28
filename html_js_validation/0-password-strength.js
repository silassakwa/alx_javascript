#!/usr/bin/node

    document.getElementById("passwordForm").addEventListener("submit", function(event) {
        const password = document.getElementById("password").value;

        if (password.length !== 8) {
            // Password is not 8 characters long, display an error message
            document.getElementById("error").textContent = "Password must be exactly 8 characters long.";
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!/[A-Z]/.test(password)) {
            // Password does not contain at least one uppercase letter, display an error message
            document.getElementById("error").textContent = "Password must contain at least one uppercase letter.";
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!/[a-z]/.test(password)) {
            // Password does not contain at least one lowercase letter, display an error message
            document.getElementById("error").textContent = "Password must contain at least one lowercase letter.";
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!/\d/.test(password)) {
            // Password does not contain at least one numeric digit, display an error message
            document.getElementById("error").textContent = "Password must contain at least one numeric digit.";
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!/[!@#$%^&*]/.test(password)) {
            // Password does not contain at least one special character, display an error message
            document.getElementById("error").textContent = "Password must contain at least one special character (!@#$%^&*).";
            event.preventDefault(); // Prevent form submission
            return;
        }

        // Password is valid, clear any previous error message
        document.getElementById("error").textContent = "";
    });