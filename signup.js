// Get the signup form element
const signupForm = document.getElementById('signupForm');

// Add event listener to the form submission
signupForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve the input values
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Perform validations
  if (password !== confirmPassword) {
    alert('Password and Confirm Password do not match. Please try again.');
    return;
  }

  // Check if the email is already registered
  const usersData = JSON.parse(localStorage.getItem('users')) || [];
  const isEmailRegistered = usersData.some(user => user.email === email);
  if (isEmailRegistered) {
    alert('Email is already registered. Please use a different email.');
    return;
  }

  // Create a new user object
  const newUser = {
    firstName,
    lastName,
    email,
    password
  };

  // Store the user data in localStorage
  usersData.push(newUser);
  localStorage.setItem('users', JSON.stringify(usersData));

  // Generate a token for successful signup
  const token = generateToken();

  // Store the token in localStorage to indicate successful signup
  localStorage.setItem('token', token);

  // Redirect to the desired page (e.g., shop.html)
  window.location.href = 'shop.html';
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
