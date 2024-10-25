document.getElementById('mode-toggle').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
      this.textContent = 'Switch to Light Mode';
  } else {
      this.textContent = 'Switch to Dark Mode';
  }
});

// Form validation
function validateForm(fields) {
  for (const field of fields) {
      if (field.value.trim() === '') {
          alert('Please fill in all fields.');
          return false;
      }
  }
  return true;
}

// Event listener for the login form
document.querySelector('.card-front .btn').addEventListener('click', function(event) {
  const loginEmail = document.getElementById('logemail');
  const loginPassword = document.getElementById('logpass');

  if (!validateForm([loginEmail, loginPassword])) {
      event.preventDefault(); // Prevent form submission
  }
});
document.querySelector('.card-back .btn').addEventListener('click', function(event) {
  const signupName = document.getElementById('signupName');
  const signupEmail = document.getElementById('signupEmail');
  const signupPassword = document.getElementById('signupPassword');
  const signupUserType = document.getElementById('userType');

  if (!validateForm([signupName, signupEmail, signupPassword, signupUserType])) {
      event.preventDefault(); // Prevent form submission
  } else {
      event.preventDefault(); // Prevent default link behavior
      const selectedUserType = signupUserType.value;
      if (selectedUserType === 'player') {
          window.location.href = 'mainmenup.html';
      } else {
          window.location.href = 'mainmenu.html';
      }
  }
});
