document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Perform basic validation
        if (!username || !password) {
            alert('Please enter both username/email and password.');
            return;
        }

        // Perform authentication (replace this with your actual authentication logic)
        // For demonstration purposes, I'm redirecting to the home page after successful login
        window.location.href = 'home.html'; // Change 'home.html' to the actual URL of your home page
    }

    // Attach form submission handler to the login form
    var loginForm = document.getElementById('loginForm'); // Corrected id here
    loginForm.addEventListener('submit', handleFormSubmit);
});