function handleFormSubmit() {
            // Prevent the default form submission behavior
            document.getElementById("submitForm").addEventListener("submit", function(event) {
                event.preventDefault();

                // Get the values of the name and email fields
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;

                // Get the error element
                const errorElement = document.getElementById("error");

                // Check if name or email is empty or null
                if (name === "" || name === null || email === "" || email === null) {
                    // Display an error message
                    errorElement.textContent = "Please fill in all the fields.";
                } else {
                    // Clear any previous error message
                    errorElement.textContent = "";
                }
            });
        }

        // Call the function to set up the event listener
        handleFormSubmit();