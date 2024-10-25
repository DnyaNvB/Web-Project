document.getElementById('mode-toggle').addEventListener('click', function () {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    this.textContent = 'Switch to Light Mode';
  } else {
    this.textContent = 'Switch to Dark Mode';
  }
});
document.getElementById('logout-button').addEventListener('click', function () {
  // Add your logout logic here, such as redirecting to a logout page
  window.location.href = 'signinlogin.html'; // Example redirect to a logout page
});
