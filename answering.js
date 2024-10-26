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

function submitRandomAnswer(event) {
  event.preventDefault(); // Prevent the default form submission

  const selectedOption = document.querySelector('input[name="random-answer"]:checked');
  const resultMessage = document.querySelector('.result-message');

  if (!selectedOption) {
    resultMessage.textContent = 'Please select an answer.';
    resultMessage.style.color = '#dc3545'; // Red for error
    return; // Exit the function if no option is selected
  }

  if (selectedOption.value === currentQuestion.correctAnswer) {
    resultMessage.textContent = 'Correct! 🎉';
    resultMessage.style.color = '#28a745'; // Green for correct
  } else {
    resultMessage.textContent = 'Incorrect. Try again! ❌';
    resultMessage.style.color = '#dc3545'; // Red for incorrect
  }
}

document.querySelector('.random-submit-btn').addEventListener('click', submitRandomAnswer);

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

// Handle answer submission for accordion questions
document.querySelectorAll('.acc-content form').forEach(form => {
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from refreshing

    const selectedOption = form.querySelector('input[type="radio"]:checked');
    const resultMessage = form.querySelector('.result-message'); // This selects the correct result-message for the form

    if (!selectedOption) {
      resultMessage.textContent = 'Please select an answer.';
      resultMessage.style.color = '#dc3545'; // Red for error
      return; // Exit if no option is selected
    }

    // Get the correct answer based on the question
    const questionText = form.closest('.acc-item').querySelector('.acc-btn').textContent.trim();
    const questionData = randomQuestions.find(q => q.question === questionText);
    const correctAnswer = questionData ? questionData.correctAnswer : null;

    // Check if the selected answer is correct
    const isCorrect = selectedOption.value === correctAnswer;

    // Display result message and style changes
    resultMessage.textContent = isCorrect ? 'Correct! 🎉' : 'Incorrect. ❌';
    resultMessage.style.color = isCorrect ? '#28a745' : '#dc3545';

    // Highlight selected answer
    selectedOption.parentElement.style.backgroundColor = isCorrect ? '#e6ffe6' : '#ffe6e6';

    // Disable the submit button and radio buttons after submission
    const submitButton = form.querySelector('button');
    submitButton.disabled = true;
    form.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);
  });
});
