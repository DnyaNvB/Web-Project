// Selects all accordion buttons
const btns = document.querySelectorAll(".acc-btn");

// Data for random questions
const randomQuestions = [
  {
    question: "What is the definition of a will?",
    options: [
      "A. It's an object you cannot live without",
      "B. A contract with destiny",
      "C. A speech given at weddings",
      "D. It is a dead giveaway"
    ],
    correctAnswer: "D"
  },
  {
    question: "What happens to chemists when they die?",
    options: [
      "A. They dissolve into the periodic mist",
      "B. The elements reclaim them",
      "C. We barium [bury them]",
      "D. They turn into noble gases"
    ],
    correctAnswer: "C"
  },
  {
    question: "Why does the leopard find it difficult to hide and stalk?",
    options: [
      "A. Because it wears stripes",
      "B. It has noisy shoes",
      "C. Because he is spotted always",
      "D. It prefers to sunbathe"
    ],
    correctAnswer: "C"
  },
  {
    question: "What kind of key opens a banana?",
    options: [
      "A. A cookie",
      "B. A donkey",
      "C. A lockpick",
      "D. A monkey"
    ],
    correctAnswer: "D"
  }
];

let currentQuestion = {};
let selectedCategory = 'all'; // Default category
let selectedDifficulty = 'all'; // Default difficulty

// Display random question
function displayRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * randomQuestions.length);
  currentQuestion = randomQuestions[randomIndex];
  const formContainer = document.querySelector('.random-question-form');
  formContainer.innerHTML = `<h4>${currentQuestion.question}</h4>`;
  currentQuestion.options.forEach((option, index) => {
    formContainer.innerHTML += `
      <div>
        <label>
          <input type="radio" name="random-answer" value="${option[0]}" required> ${option}
        </label>
      </div>
    `;
  });

  const submitButton = document.querySelector('.random-submit-btn');
  submitButton.style.display = 'block';
  submitButton.style.margin = '0 auto';
  document.querySelector('.result-message').textContent = '';
}

// Submit random answer
function submitRandomAnswer() {
  const selectedOption = document.querySelector('input[name="random-answer"]:checked');
  if (!selectedOption) {
    alert('Please select an answer.');
    return;
  }
  const resultMessage = document.querySelector('.result-message');
  if (selectedOption.value === currentQuestion.correctAnswer) {
    resultMessage.textContent = 'Correct! 🎉';
    resultMessage.style.color = '#28a745';
  } else {
    resultMessage.textContent = 'Incorrect. Try again! ❌';
    resultMessage.style.color = '#dc3545';
  }
}

// Update category filter
function updateCategoryFilter() {
  selectedCategory = document.getElementById('category-select').value;
  filterQuestions();
}

// Filter questions by difficulty and category
function filterQuestions(difficulty = selectedDifficulty, category = selectedCategory) {
  selectedDifficulty = difficulty; // Update global difficulty
  const items = document.querySelectorAll('.acc-item');

  items.forEach(item => {
    const itemDifficulty = item.getAttribute('data-difficulty');
    const itemCategory = item.getAttribute('data-category') || "general"; // Default to "general" if no category
    const matchesDifficulty = difficulty === 'all' || itemDifficulty === difficulty;
    const matchesCategory = category === 'all' || itemCategory === category;

    item.style.display = matchesDifficulty && matchesCategory ? 'block' : 'none';
  });
}


// Accordion toggle
function accordion() {
  this.classList.toggle("is-open");
  const content = this.nextElementSibling;
  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

// Event listeners
btns.forEach((el) => el.addEventListener("click", accordion));
document.getElementById('logout-button').addEventListener('click', function () {
  window.location.href = 'questions.html';
});
