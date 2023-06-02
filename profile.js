// Retrieve the user data from localStorage
const usersData = JSON.parse(localStorage.getItem('users')) || [];

// Get the profile form element
const profileForm = document.getElementById('profileForm');

// Find the current user based on the token stored in localStorage
const token = localStorage.getItem('token');
const currentUser = usersData.find(user => user.token === token);

// Pre-fill the form fields with user data
document.getElementById('firstName').value = currentUser.firstName;
document.getElementById('lastName').value = currentUser.lastName;
document.getElementById('email').value = currentUser.email;

// Add event listener to the form submission
profileForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve the updated input values
  const updatedFirstName = document.getElementById('firstName').value;
  const updatedLastName = document.getElementById('lastName').value;
  const updatedEmail = document.getElementById('email').value;

  // Update the user information in localStorage
  currentUser.firstName = updatedFirstName;
  currentUser.lastName = updatedLastName;
  currentUser.email = updatedEmail;
  localStorage.setItem('users', JSON.stringify(usersData));

  // Show a success message
  alert('Profile updated successfully.');

  // Redirect to the desired page (e.g., shop.html)
  window.location.href = 'shop.html';
});
