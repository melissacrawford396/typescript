class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person {
    firstName: string;
    lastName: string;
}  
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}  
// let user = { firstName: "Jane", lastName: "User" };  
// Weird, but apparently TS doesn't require the object to be of type Person, as long as it has the required properties.
let user = new Student("Jane2", "M.", "User2");
document.body.textContent = greeter(user);


// function greeter(person: string) {
//     return "Hello, " + person;
// }

// let user = "Jane User";

// document.body.textContent = greeter(user);  