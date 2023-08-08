// Create a variable with 'let' and 'const'
let myVariable = "Hello, I am a variable with 'let'!";
const myConstantVariable = "I am a constant variable and cannot be changed!";

// Use console.log() to display the contents of the variable in the browser console
console.log(myVariable);
console.log(myConstantVariable);

// A. Make an array of 5 fruits (strings)
let fruits = ["apple", "banana", "orange", "grapes", "kiwi"];
console.log(fruits); // Initial array
console.log(fruits.length); // Length after adding one fruit

// B. Add one fruit
fruits.push("mango");
console.log(fruits); // Initial array
console.log(fruits.length); // Length after adding one fruit

// C. Edit/change one fruit
fruits[1] = "pear";
console.log(fruits); // Initial array
console.log(fruits.length); // Length after adding one fruit

// D. Subtract one last fruit from the array
fruits.pop();
console.log(fruits); // Initial array
console.log(fruits.length); // Length after adding one fruit


