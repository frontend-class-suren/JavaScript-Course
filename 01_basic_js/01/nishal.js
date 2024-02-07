var str = "nishal branch"

var str1 = "prayas branch"
var str2 = "himal branch"

console.log(str)
nishal
var str1 = "prayas branch"
 prayas

// Operators
 let a = 10;
let b = 5;
let result = (a + b) * (a - b);
console.log(result); // Output: 75
// Comparison Operators:
let x = 10;
let y = '10';
console.log(x == y);  // Output: true
console.log(x === y); // Output: false
// Bitwise Operators:
let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011
console.log(num1 & num2); // Output: 1 (Binary: 0001)
console.log(num1 | num2); // Output: 7 (Binary: 0111)
// Logical Operators:
let isAdult = true;
let hasLicense = false;
console.log(isAdult && hasLicense); // Output: false
console.log(isAdult || hasLicense); // Output: true
// String Concatenation:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe
// String Length:
let message = "Hello, World!";
console.log(message.length); // Output: 13
// Conditional Statements:
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}
// Output: You are eligible to vote.

hw yetr
// Check if a number is positive, negative, or zero
function checkNumberType(num) {
    if (isNaN(num)) {
        console.log("Variable is not a number");
    } else {
        if (num > 0) {
            console.log("Number is positive");
        } else if (num < 0) {
            console.log("Number is negative");
        } else {
            console.log("Number is zero");
        }
    }
}

// Find the maximum among four numbers
function findMaxAmongFour(num1, num2, num3, num4) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        console.log("Variable is not a number");
    } else {
        let max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        if (num4 > max) {
            max = num4;
        }
        console.log("The maximum number is:", max);
    }
}

// Check if a year is a leap year
function checkLeapYear(year) {
    if (isNaN(year)) {
        console.log("Invalid year");
    } else {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    }
}

// Calculate the area of different shapes
function calculateArea(shape, ...params) {
    if (isNaN(params.filter(param => isNaN(param)).length)) {
        switch (shape.toLowerCase()) {
            case "rectangle":
                console.log("Area of rectangle:", params[0] * params[1]);
                break;
            case "circle":
                console.log("Area of circle:", Math.PI * Math.pow(params[0], 2));
                break;
            case "triangle":
                const s = (params[0] + params[1] + params[2]) / 2;
                console.log("Area of triangle:", Math.sqrt(s * (s - params[0]) * (s - params[1]) * (s - params[2])));
                break;
            default:
                console.log("Invalid shape");
        }
    } else {
        console.log("Invalid input");
    }
}