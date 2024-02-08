// // var str = "nishal branch"

// // var str1 = "prayas branch"
// // var str2 = "himal branch"

// // console.log(str)
// // nishal
// // var str1 = "prayas branch"
// //  prayas
// var str = "nishal branch"

// var str1 = "prayas branch"
// var str2 = "himal branch"

// console.log(str)
// nishal
// var str1 = "prayas branch"
//  prayas

// // // Operators
// //  let a = 10;
// // let b = 5;
// // let result = (a + b) * (a - b);
// // console.log(result); // Output: 75
// // // Comparison Operators:
// // let x = 10;
// // let y = '10';
// // console.log(x == y);  // Output: true
// // console.log(x === y); // Output: false
// // // Bitwise Operators:
// // let num1 = 5; // Binary: 0101
// // let num2 = 3; // Binary: 0011
// // console.log(num1 & num2); // Output: 1 (Binary: 0001)
// // console.log(num1 | num2); // Output: 7 (Binary: 0111)
// // // Logical Operators:
// // let isAdult = true;
// // let hasLicense = false;
// // console.log(isAdult && hasLicense); // Output: false
// // console.log(isAdult || hasLicense); // Output: true
// // // String Concatenation:
// // let firstName = "John";
// // let lastName = "Doe";
// // let fullName = firstName + " " + lastName;
// // console.log(fullName); // Output: John Doe
// // // String Length:
// // let message = "Hello, World!";
// // console.log(message.length); // Output: 13
// // // Conditional Statements:
// // let age = 20;
// // if (age >= 18) {
// //     console.log("You are eligible to vote.");
// // } else {
// //     console.log("You are not eligible to vote yet.");
// }
// // Output: You are eligible to vote.

// // hw yetr
// // function checkNumber(num) {
// //     if (isNaN(num)) {
// //         console.log("Variable is not a number");
// //     } else {
// //         console.log("Variable is a valid number");
// //         if (num % 2 === 0) {
// //             console.log("Number is even");
// //         } else {
// //             console.log("Number is odd");
// //         }
// //     }
// // }

// // function findLargest(num1, num2, num3) {
// //     if (num1 > num2 && num1 > num3) {
// //         console.log("num1 is the largest");
// //     } else if (num2 > num3) {
// //         console.log("num2 is the largest");
// //     } else {
// //         console.log("num3 is the largest");
// //     }
// // }

// // function checkTriangle(side1, side2, side3) {
// //     if (side1 === side2 && side2 === side3) {
// //         console.log("Equilateral triangle.");
// //     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
// //         console.log("Isosceles triangle.");
// //     } else {
// //         console.log("Scalene triangle.");
// //     }
// // }

// // function performOperation(num1, num2, operation) {
// //     switch (operation) {
// //         case "add":
// //             console.log("Result of num1+num2:", num1 + num2);
// //             break;
// //         case "subtract":
// //             console.log("Result of num1-num2:", num1 - num2);
// //             break;
// //         case "multiply":
// //             console.log("Result of num1*num2:", num1 * num2);
// //             break;
// //         case "divide":
// //             console.log("Result of num1/num2:", num1 / num2);
// //             break;
// //         case "modulus":
// //             console.log("Result of num1%num2:", num1 % num2);
// //             break;
// //         default:
// //             console.log("Invalid operation");
// //     }
// // }

// // function findGrade(marks) {
// //     if (marks >= 90 && marks <= 100) {
// //         console.log("S grade");
// //     } else if (marks >= 80 && marks < 90) {
// //         console.log("A grade");
// //     } else if (marks >= 70 && marks < 80) {
// //         console.log("B grade");
// //     } else if (marks >= 60 && marks < 70) {
// //         console.log("C grade");
// //     } else if (marks >= 50 && marks < 60) {
// //         console.log("D grade");
// //     } else if (marks >= 40 && marks < 50) {
// //         console.log("E grade");
// //     } else if (marks >= 0 && marks < 40) {
// //         console.log("Student has failed");
// //     } else {
// //         console.log("Invalid marks");
// //     }
// // }

// // // Example usage:
// // checkNumber(5); // Variable is a valid number, Number is odd
// // findLargest(10, 20, 15); // num2 is the largest
// // checkTriangle(5, 5, 5); // Equilateral triangle.
// // performOperation(10, 5, "add"); // Result of num1+num2: 15
// // findGrade(85); // A grade

// let number1 = 10;

// Check if number1 is even or odd
// if (typeof number1 === 'number') {
//     if (number1 % 2 === 0) {
//         console.log("Number is even");
//     } else {
//         console.log("Number is odd");
//     }
// } else {
//     console.log("Variable is not a number");
// }

// let number2 = 5;

// Check if number2 is even or odd
// if (typeof number2 === 'number') {
//     if (number2 % 2 === 0) {
//         console.log("Number is even");
//     }else{
//         console.log("Number is odd");
//     }
// }else{
//     console.log("Number2 is Number");
// }
// hw yetr
// Check if a number is positive, negative, or zero
// function checkNumberType(num) {
//     if (isNaN(num)) {
//         console.log("Variable is not a number(NaN)");
//     } else {
//         console.log("Number is Number");
//     }
// } 

// let num1 = 8;
// let num2 = 6;

// Check if num1 is greater than num2
// if (typeof num1 === 'number' && typeof num2 === 'number') {
//     if (num1 > num2) {
//         console.log("num1 is the largest");
//     } else if (num1 < num2) {
//         console.log("num2 is the largest");
//     } else {
//         console.log("num1 and num2 are equal");
//     }
// }

// let num3 = 12;

// Check if num1 is greater than num2 and num3
// if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
//     if (num1 > num2 && num1 > num3) {
//         console.log("num1 is the largest");
//     } else if (num2 < num3) {
//         console.log("num2 is the largest");
//     } else {
//         console.log("num3 is the largest");
//     }
// }

// let side1 = 5;
// let side2 = 5;
// let side3 = 5;

// Check type of triangle
// if (side1 === side2 && side2 === side3) {
//     console.log("Equilateral triangle.");
// } else if (side1 === side2 || side2 === side3||side1===side3) {
//     console.log("Isosceles triangle.");
// } else {
//     console.log("Scalene triangle.");
// }

// let operation = "multiply";

// Perform arithmetic operation
// if (operation === "add") {
//     console.log("Result of addition: " + (num1 + num2));
// } else if (operation === "subtract") {
//     console.log("Result of subtraction: " + (num1 - num2));
// } else if (operation === "multiply") {
//     console.log("Result of multiplication: " + (num1 * num2));
// } else if (operation === "divide") {
//     console.log("Result of division: " + (num1 / num2));
// } else if (operation === "modulus") {
//     console.log("Result of modulus: " + (num1 % num2));
// } else {
//     console.log("Invalid operation");
// }

// let marks = 75;

// Check grade based on marks
// if (typeof marks === 'number') {
//     if (marks >= 90 && marks <= 100) {
//         console.log("S grade");
//     } else if (marks >= 80 && marks < 90) {
//         console.log("A grade");
//     } else if (marks >= 70 && marks < 80) {
//         console.log("B grade");
//     } else if (marks >= 60 && marks < 70) {
//         console.log("C grade");
//     } else if (marks >= 50 && marks < 60) {
//         console.log("D grade");
//     } else if (marks >= 40 && marks < 50) {
//         console.log("E grade");
//     } else if (marks >= 0 && marks < 40) {
//         console.log("Student has failed");
//     } else {
//         console.log("Invalid marks");
//     }
// }
// js loops example
// console.log("loop:");
// for (let i = 1; i <= 5; i++) {
//     console.log("Iteration", i);
// }