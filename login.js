document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    // Simple validation (you should handle more sophisticated validation and security on the server-side)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
        return;
    }
    // Example of a simple client-side validation
    // You should perform the actual login process via AJAX or fetch API
    errorMessage.textContent = '';
    // For demonstration purposes only
    console.log('Login submitted');
    // Perform your login logic here (e.g., send data to the server)
});
