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

    // Creating a list item with all the necessary information
    let questionItem = `
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

    // Append the question item to the list
    document.getElementById('questions_list').insertAdjacentHTML('beforeend', questionItem);
}

document.getElementById('logout-button').addEventListener('click', function () {
    window.location.href = 'mainmenu.html';
});