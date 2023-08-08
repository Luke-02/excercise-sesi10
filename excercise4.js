function checkOddOrEven(number) {
    // Step F: Data type checking
    if (typeof number !== 'number' || isNaN(number)) {
      return "Invalid Data";
    }
  
    // Step B: Checking if the number is odd or even
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
  // Step D: Testing with console.log
  console.log(checkOddOrEven(2));   // Output: "even"
  console.log(checkOddOrEven(3));   // Output: "odd"
  console.log(checkOddOrEven(20));  // Output: "even"
  console.log(checkOddOrEven(21));  // Output: "odd"
  console.log(checkOddOrEven("test"));  // Output: "Invalid Data"
  