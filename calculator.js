// Ensure the DOM is fully loaded before executing the script.
// This prevents errors that might occur if JavaScript tries to access HTML elements
// before they have been fully loaded and parsed by the browser.
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the input fields and the result display element.
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculationResultSpan = document.getElementById('calculation-result');

    // Get references to all operation buttons.
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // --- Arithmetic Functions ---
    // These functions perform the basic arithmetic operations.

    /**
     * Adds two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The difference between num1 and num2.
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * Multiplies two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of num1 and num2.
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides the first number by the second.
     * Includes a check for division by zero to prevent errors.
     * @param {number} num1 - The numerator.
     * @param {number} num2 - The denominator.
     * @returns {number|string} The quotient of num1 and num2, or an error message if dividing by zero.
     */
    function divide(num1, num2) {
        if (num2 === 0) {
            return "Error: Cannot divide by zero!"; // Return a specific error message
        }
        return num1 / num2;
    }

    // --- Helper function to get and validate input numbers ---
    /**
     * Retrieves and parses the numerical values from the input fields.
     * Uses parseFloat to convert string input to a floating-point number.
     * If an input is empty or not a valid number, it defaults to 0.
     * @returns {object} An object containing number1 and number2.
     */
    function getNumbers() {
        // parseFloat() attempts to parse a string argument and returns a floating-point number.
        // If it cannot parse, it returns NaN (Not-a-Number).
        // The '|| 0' (OR operator) provides a default value of 0 if parseFloat returns NaN
        // or if the input field's value is an empty string (which is falsy).
        const number1 = parseFloat(number1Input.value) || 0;
        const number2 = parseFloat(number2Input.value) || 0;
        return { number1, number2 };
    }

    // --- Attach Event Listeners to Buttons ---
    // Each button will have a click event listener that performs the calculation
    // and updates the result display.

    // Addition Button
    addButton.addEventListener('click', function() {
        const { number1, number2 } = getNumbers(); // Get numbers from inputs
        const result = add(number1, number2); // Perform addition
        calculationResultSpan.textContent = result; // Display result
    });

    // Subtraction Button
    subtractButton.addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        const result = subtract(number1, number2);
        calculationResultSpan.textContent = result;
    });

    // Multiplication Button
    multiplyButton.addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        const result = multiply(number1, number2);
        calculationResultSpan.textContent = result;
    });

    // Division Button
    divideButton.addEventListener('click', function() {
        const { number1, number2 } = getNumbers();
        const result = divide(number1, number2);
        calculationResultSpan.textContent = result;
    });
});
