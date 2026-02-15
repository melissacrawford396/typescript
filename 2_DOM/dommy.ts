
// 1. Select the div element using the id property
const app = document.getElementById("app");

// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");


// 3. Add the text content
p.textContent = "I am the Dommy Mommy!";

// 4. Append the p element to the div element
app?.appendChild(p);

//For those interested, you can interact with custom tag elements using the
// document.getElementsByTagName
const customTags = document.getElementsByTagName("taggy");
console.log(customTags);