// A. Make an object that describes each of you.
const me = {
    first_name: "Luke",
    last_name: "Jonathan",
    hobbies: ["reading", "writing", "learning new things"],
    favorite_numbers: 18,
    wear_glasses: false,
  };
  
  // B. Display each property using console.log after each change.
  console.log(me.first_name);
  console.log(me.last_name);
  console.log(me.hobbies);
  console.log(me.favorite_numbers);
  console.log(me.wear_glasses);
  
  // C. Print full_name with console.log.
  const full_name = me.first_name + " " + me.last_name;
  console.log(full_name);
  
  // D. Change favorite_numbers to 8.
  me.favorite_numbers = 8;
  
  // E. Add one hobby "coding".
  me.hobbies.push("coding");
  
  // F. Add a property "graduate" with the value "Hacktiv8".
  me.graduate = "Hacktiv8";
  
  // G. Print all hobbies one by one using a loop.
  console.log("Hobbies:");
  for (const hobby of me.hobbies) {
    console.log(hobby);
  }
  
  // H. Print all keys belonging to the object, and print all values belonging to the object.
  console.log("Keys:");
  for (const key in me) {
    console.log(key);
  }
  
  console.log("Values:");
  for (const value of Object.values(me)) {
    console.log(value);
  }
  
  // J. Use the loop to print all the properties of the object with the format key : value.
  console.log("Properties:");
  for (const key in me) {
    console.log(`${key} : ${me[key]}`);
  }
  