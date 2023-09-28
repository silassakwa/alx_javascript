
// Function to dynamically generate input fields
function generateFields() {
    var numFields = parseInt(document.getElementById("numFields").value);
    var inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous fields

    for (var i = 1; i <= numFields; i++) {
        var inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form
function validateForm() {
    document.getElementById("dynamicForm").addEventListener("submit", function(event) {
        event.preventDefault();
        // Add your form validation logic here
        // For example, check the values of input fields and show validation messages
        // You can also submit the form using JavaScript after validation if it's successful
    });
}

// Call the generateFields function initially
generateFields();

// Call the validateForm function to set up form validation
validateForm();