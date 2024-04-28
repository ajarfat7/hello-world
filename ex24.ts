
let string1 = 'hello';
let string2 = 'HELLO';
let string3 = 'world';

// Tests for equality and inequality with strings
console.log("Test for equality between string1 and string3: ", string1 == string3); // False
console.log("Test for inequality between string1 and string2 ignoring case: ", string1.toLowerCase() != string2.toLowerCase()); // False

// Tests using the lower case function
console.log("Test for equality between string1 and string2 ignoring case: ", string1.toLowerCase() == string2.toLowerCase()); // True
console.log("Test for equality between string2 and string3 ignoring case: ", string2.toLowerCase() == string3.toLowerCase()); // False

let num1 = 10;
let num2 = 5;

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Test for num1 greater than num2: ", num1 > num2); // True
console.log("Test for num1 less than or equal to num2: ", num1 <= num2); // False

// Tests using "and" and "or" operators
console.log("Test for num1 greater than 5 and num2 less than 10: ", num1 > 5 && num2 < 10); // True
console.log("Test for num1 less than 5 or num2 greater than 10: ", num1 < 5 || num2 > 10); // False

let array = [1, 2, 3, 4, 5];

// Test whether an item is in an array
console.log("Test for presence of 3 in the array: ", array.includes(3)); // True
console.log("Test for presence of 6 in the array: ", array.includes(6)); // False

// Test whether an item is not in an array
console.log("Test for absence of 6 in the array: ", !array.includes(6)); // True
console.log("Test for absence of 2 in the array: ", !array.includes(2)); // False
