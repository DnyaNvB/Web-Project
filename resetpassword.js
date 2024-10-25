function toggleMode() {
    const body = document.body;
    const button = document.getElementById("mode-toggle");

    // Toggle dark and light mode
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Update button text based on the current mode
    if (body.classList.contains("dark-mode")) {
      button.textContent = "Switch to Light Mode";
    } else {
      button.textContent = "Switch to Dark Mode";
    }
  }

  // Add click event listener to toggle button
  document.getElementById("mode-toggle").addEventListener("click", toggleMode);
