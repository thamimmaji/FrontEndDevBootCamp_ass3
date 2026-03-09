// Get form element
const form = document.getElementById("registrationForm");

// Listen for form submit
form.addEventListener("submit", function(event) {

    // Prevent default submission
    event.preventDefault();

    // Get input values
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let phone = document.querySelector('input[type="tel"]').value;
    let checkbox = document.querySelector('input[type="checkbox"]');

    // Basic validation
    if(name === "" || email === "" || phone === ""){
        alert("Please fill all required fields.");
        return;
    }

    if(!checkbox.checked){
        alert("Please confirm that the details are correct.");
        return;
    }

    // Success message
    alert("Registration Successful!");

    // Reset form
    form.reset();
});
