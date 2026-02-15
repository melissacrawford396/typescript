// Get the elements from the DOM
const countDisplay = document.getElementById('count-display') as HTMLParagraphElement;
const counterButton = document.getElementById('counter-button') as HTMLButtonElement;

// Initialize the count variable
let count = 0;

// Function to update the display
function updateDisplay(): void {
    if (countDisplay) {
        countDisplay.textContent = count.toString();
    }
}

// Function to handle the click button
function handleButtonClick(): void {
    count++; // inc count
    updateDisplay(); // update the display
}

// Add a click event listern to the button
if (counterButton){
    counterButton.addEventListener('click', handleButtonClick);
}

updateDisplay();
