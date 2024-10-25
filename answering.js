const btns = document.querySelectorAll(".acc-btn");

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
function displayRandomQuestion() {
  // Select a random question
  const randomIndex = Math.floor(Math.random() * randomQuestions.length);
  currentQuestion = randomQuestions[randomIndex];

  // Display the random question and options
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

  // Show the submit button
  const submitButton = document.querySelector('.random-submit-btn');
  submitButton.style.display = 'block';
  submitButton.style.margin = '0 auto'; // Center the button

  // Clear any previous result message
  document.querySelector('.result-message').textContent = '';
}

function submitRandomAnswer() {
  const selectedOption = document.querySelector('input[name="random-answer"]:checked');
  
  if (!selectedOption) {
    alert('Please select an answer.');
    return;
  }

  const resultMessage = document.querySelector('.result-message');
  if (selectedOption.value === currentQuestion.correctAnswer) {
    resultMessage.textContent = 'Correct! 🎉';
    resultMessage.style.color = '#28a745'; // Green for correct
  } else {
    resultMessage.textContent = 'Incorrect. Try again! ❌';
    resultMessage.style.color = '#dc3545'; // Red for incorrect
  }
}


function submitRandomAnswer() {
  const selectedOption = document.querySelector('input[name="random-answer"]:checked');
  
  if (!selectedOption) {
    alert('Please select an answer.');
    return;
  }

  const resultMessage = document.querySelector('.result-message');
  if (selectedOption.value === currentQuestion.correctAnswer) {
    resultMessage.textContent = 'Correct! 🎉';
    resultMessage.style.color = '#28a745'; // Green for correct
  } else {
    resultMessage.textContent = 'Incorrect. Try again! ❌';
    resultMessage.style.color = '#dc3545'; // Red for incorrect
  }
}


// fn
function filterQuestions(difficulty) {
  const items = document.querySelectorAll('.acc-item');

  items.forEach(item => {
    if (difficulty === 'all' || item.getAttribute('data-difficulty') === difficulty) {
      item.style.display = 'block'; // Show item
    } else {
      item.style.display = 'none'; // Hide item
    }
  });
}

function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));

/*

       Jokes are from >
        https://chartcons.com/100-funny-trick-questions-answers/
        Background image from >
        https://www.magicpattern.design/tools/css-backgrounds

*/

document.getElementById('logout-button').addEventListener('click', function () {
  // Add your logout logic here, such as redirecting to a logout page
  window.location.href = 'questions.html'; // Example redirect to a logout page
});
