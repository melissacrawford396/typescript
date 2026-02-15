const myButton = document.getElementById('myButton') as HTMLButtonElement;
const messageArea = document.getElementById('messageArea') as HTMLParagraphElement;

// Define a function to handle the button click event
function handleClick(): void {
    messageArea.textContent = "Button click!";
    console.log('Button was clicked!');
}

// Add an event listener to the button
if (myButton) {
    myButton.addEventListener('click', handleClick);
}