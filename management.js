document.getElementById('mode-toggle').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        this.textContent = 'Switch to Light Mode';
    } else {
        this.textContent = 'Switch to Dark Mode';
    }
});

function add_to_list() {
    // Get the values of inputs
    let category = document.querySelector('select[name="category"]').value;
    let title = document.querySelector('.input_title_desc').value;
    let description = document.querySelector('.input_description').value;
    let difficulty = document.querySelector('select[name="difficulty"]').value;
    let optionA = document.querySelector('#option_a').value;
    let optionB = document.querySelector('#option_b').value;
    let optionC = document.querySelector('#option_c').value;
    let optionD = document.querySelector('#option_d').value;
    let correctAnswer = document.querySelector('#correct_answer').value;

    const questionData = { category, title, description, difficulty, optionA, optionB, optionC, optionD, correctAnswer };
    addQuestionToList(questionData);
}

function addQuestionToList({ category, title, description, difficulty, optionA, optionB, optionC, optionD, correctAnswer }) {
    const questionItem = `
        <li class="question_item">
            <div class="question_details">
                <div class="question_header">
                    <p><strong>Category:</strong> ${category}</p>
                    <h4>${title}</h4>
                    <p><strong>Description:</strong> ${description}</p>
                    <p><strong>Difficulty:</strong> ${difficulty}</p>
                </div>
                <div class="question_options">
                    <p><strong>Options:</strong></p>
                    <ul>
                        <li>A: ${optionA}</li>
                        <li>B: ${optionB}</li>
                        <li>C: ${optionC}</li>
                        <li>D: ${optionD}</li>
                    </ul>
                    <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
                </div>
            </div>
        </li>
    `;

    document.getElementById('questions_list').insertAdjacentHTML('beforeend', questionItem);
}

function loadDefaultQuestions() {
    const defaultQuestions = [
        {
            category: "SHOPPING",
            title: "What is the busiest shopping day?",
            description: "Identify the peak day for shopping traffic.",
            difficulty: "EASY",
            optionA: "Christmas Eve",
            optionB: "Black Friday",
            optionC: "Easter",
            optionD: "Halloween",
            correctAnswer: "B"
        },
        {
            category: "WORK",
            title: "Which day is typically the most productive?",
            description: "Choose the most productive workday.",
            difficulty: "NORMAL",
            optionA: "Monday",
            optionB: "Wednesday",
            optionC: "Friday",
            optionD: "Sunday",
            correctAnswer: "A"
        },
        {
            category: "SPORT",
            title: "Which country has won the most World Cups?",
            description: "Select the country with the highest number of World Cup wins.",
            difficulty: "HARD",
            optionA: "Argentina",
            optionB: "Brazil",
            optionC: "Germany",
            optionD: "Italy",
            correctAnswer: "B"
        }
    ];

    defaultQuestions.forEach(question => addQuestionToList(question));
}

// Call loadDefaultQuestions when the page loads
window.onload = loadDefaultQuestions;

document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = 'mainmenu.html';
});
