/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

result = "5" - 2; 
let num = Number("5"); // Explicitly convert the string "5" to a number
console.log("The result is: " + result); // This will output 3, as the subtraction operator converts "5" to a number

Boolean = true; // Explicitly set isValid to a boolean value
if (Boolean) {
  console.log("This is valid!"); // This will now execute because isValid is true
}
age = "25";
totalAge = ( Number(age) ) + 5; // This will output "Total Age: 30" because age is now a number and the addition works as expected
console.log("Total Age: " + totalAge);

let miles = "10";
let remainingMiles = miles -4; // Implicitly converts "10" to a number and performs subtraction
console.log("Miles to go: " + remainingMiles); // This will output "Miles to go: 6" because the subtraction operator converts "10" to a number

let muffins = 3; // Explicitly convert the number of muffins to a string for concatenation
let remainingMuffins = String(muffins) + " muffins left"; // This will output "3 muffins left" because the number of muffins is converted to a string for concatenation
console.log("Muffins left: " + muffins); //

let name; //
console.log(name); //
