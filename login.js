// Get the login form element
const loginForm = document.getElementById('loginForm');

// Add event listener to the form submission
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve the input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate the credentials against the stored user data in localStorage
  const usersData = JSON.parse(localStorage.getItem('users')) || [];
  const user = usersData.find(user => user.email === email && user.password === password);

  if (user) {
    // Generate a token for successful login
    const token = generateToken();

    // Store the token in localStorage to indicate that the user is logged in
    localStorage.setItem('token', token);

    // Redirect to the desired page (e.g., shop.html)
    window.location.href = 'shop.html';
  } else {
    // Display an error message for invalid credentials
    alert('Invalid email or password. Please try again.');
  }
});

// Function to generate a random token
function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < 16; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return token;
}
