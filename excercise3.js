// A. Function that prints the current date when called
function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate.toDateString());
  }
  
  // B. Function that returns the current date when called
  function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString();
  }
  
  // C. Print the result of the function
  console.log("Printing current date:");
  printCurrentDate();
  
  console.log("Getting current date and printing the result:");
  const currentDateResult = getCurrentDate();
  console.log(currentDateResult);
  