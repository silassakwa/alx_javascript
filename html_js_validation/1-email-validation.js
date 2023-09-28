#!/usr/bin/node
    function validateEmail() {
        const email = document.getElementById("email").value;
        const errorElement = document.getElementById("error");

        // Regular expression for a simple email validation
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            // Email is not in a valid format, display an error message
            errorElement.textContent = "Please enter a valid email address.";
            return false; // Prevent form submission
        } else {
            // Email is valid, clear any previous error message
            errorElement.textContent = "";
        }
    }
