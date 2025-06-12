// Ensure the DOM is fully loaded before executing the script.
// This is good practice to ensure all HTML elements are available
// for the JavaScript to select and manipulate.
document.addEventListener('DOMContentLoaded', () => {

    // Define a hardcoded username for demonstration purposes.
    // In a real application, this would typically come from user input or a user session.
    const userName = "Drew";

    // Define a function named checkAnswer.
    // This function will contain the core logic for validating the quiz answer.
    function checkAnswer() {
        // 1. Identify the Correct Answer:
        // Declare a variable to hold the correct answer for the quiz question.
        const correctAnswer = "4"; // The correct answer to "What is 2 + 2?"

        // 2. Retrieve the User's Answer:
        // Use document.querySelector to select the currently checked radio button.
        // The selector 'input[name="quiz"]:checked' targets an <input> element
        // with the 'name' attribute set to "quiz" AND is currently ':checked'.
        const selectedChoice = document.querySelector('input[name="quiz"]:checked');

        // Get the feedback paragraph element early, as it's used in all feedback paths.
        const feedbackElement = document.getElementById('feedback');

        // Check if a radio button was actually selected.
        // If nothing is selected, selectedChoice will be null.
        if (!selectedChoice) {
            feedbackElement.textContent = `${userName}, please select an answer.`; // Personalized message
            feedbackElement.style.color = 'orange'; // Optional: provide visual feedback
            return; // Exit the function if no choice is made
        }

        // Access the value property of the selected radio button to get the user's answer.
        const userAnswer = selectedChoice.value;

        // 3. Compare the User’s Answer with the Correct Answer:
        // Implement an if statement to compare userAnswer with correctAnswer.

        if (userAnswer === correctAnswer) {
            // If the user's answer matches the correct answer:
            feedbackElement.textContent = `Correct, ${userName}! Well done.`; // Personalized message
            feedbackElement.style.color = 'green'; // Set text color to green for success
        } else {
            // If the user's answer does not match:
            feedbackElement.textContent = `That's incorrect, ${userName}. Try again!`; // Personalized message
            feedbackElement.style.color = 'red'; // Set text color to red for incorrect
        }
    }

    // 4. Add an Event Listener to the Submit Button:
    // Select the "Submit Answer" button by its ID.
    const submitButton = document.getElementById('submit-answer');

    // Add a click event listener to the button.
    // When the button is clicked, the checkAnswer function will be executed.
    // Note: We pass checkAnswer as a reference (without parentheses) so it's
    // executed when the click event occurs, not immediately when the listener is added.
    submitButton.addEventListener('click', checkAnswer);
});
