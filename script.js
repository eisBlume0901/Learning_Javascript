// Arrow functions
// uses const than var as function expression is always constant 
// counterpart in Java: Lambda expressions
const multiply = (x, y) => x * y;
console.log(multiply(5, 2));

// Arrow functions with Rest Parameters, REST = indefinite number of arguments as an array
// 0 is initial value

// Getting average
const average = (...numbers) => numbers.reduce((a, b) => (a + b), 0) / numbers.length;
console.log(average(1, 2, 3));

// logging all arguments
const logAll = (...inputs) => console.log(inputs);
logAll("Eisblume", 1019);

// flatten
const flatten = (...arrays) => arrays.flat();
console.log(flatten([1, 2], [3], [4, 5]))