document.getElementById('mode-toggle').addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    this.textContent = 'Switch to Light Mode';
  } else {
    this.textContent = 'Switch to Dark Mode';
  }
});

// Add click event listener to toggle button
document.getElementById("mode-toggle").addEventListener("click", toggleMode);