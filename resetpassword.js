document.getElementById('mode-toggle').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    this.textContent = 'Switch to Light Mode';
  } else {
    this.textContent = 'Switch to Dark Mode';
  }
});

function validateForm(fields) {
  for (const field of fields) {
      if (field.value.trim() === '') {
          alert('Please fill in all fields.');
          return false;
      }
  }
  return true;
}

  document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = 'signinlogin.html';
  });

  document.querySelector('.card-front .btn').addEventListener('click', function(event) {
    const loginEmail = document.getElementById('prevpass');  
    const loginPassword = document.getElementById('newpass');
    const conf = document.getElementById('confirmpass');
    if (!validateForm([loginEmail, loginPassword,conf])) {
        event.preventDefault(); // Prevent form submission
    }
  });