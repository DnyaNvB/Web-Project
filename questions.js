const btns = document.querySelectorAll(".acc-btn");

// Accordion behavior
function accordion() {
  this.classList.toggle("is-open");
  const content = this.nextElementSibling;
  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

btns.forEach((el) => el.addEventListener("click", accordion));

// Filter questions by difficulty and category
function applyFilters() {
  const difficulty = document.getElementById('difficulty-select').value;
  const category = document.getElementById('category-select').value;
  const items = document.querySelectorAll('.acc-item');

  items.forEach(item => {
    const matchesDifficulty = difficulty === 'all' || item.getAttribute('data-difficulty') === difficulty;
    const matchesCategory = category === 'all' || item.getAttribute('data-category') === category;
    item.style.display = matchesDifficulty && matchesCategory ? 'block' : 'none';
  });
}

// Dark/Light mode toggle
document.getElementById('mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Logout button functionality
document.getElementById('logout-button').addEventListener('click', function() {
  window.location.href = 'mainmenup.html';
});
