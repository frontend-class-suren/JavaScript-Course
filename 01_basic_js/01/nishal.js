// // // // var str = "nishal branch"

// // // // var str1 = "prayas branch"
// // // // var str2 = "himal branch"

// // // // console.log(str)
// // // // nishal
// // // // var str1 = "prayas branch"
// // // //  prayas
// // // var str = "nishal branch"

// // // var str1 = "prayas branch"
// // // var str2 = "himal branch"

// // // console.log(str)
// // // nishal
// // // var str1 = "prayas branch"
// // //  prayas

// // // // // Operators
// // // //  let a = 10;
// // // // let b = 5;
// // // // let result = (a + b) * (a - b);
// // // // console.log(result); // Output: 75
// // // // // Comparison Operators:
// // // // let x = 10;
// // // // let y = '10';
// // // // console.log(x == y);  // Output: true
// // // // console.log(x === y); // Output: false
// // // // // Bitwise Operators:
// // // // let num1 = 5; // Binary: 0101
// // // // let num2 = 3; // Binary: 0011
// // // // console.log(num1 & num2); // Output: 1 (Binary: 0001)
// // // // console.log(num1 | num2); // Output: 7 (Binary: 0111)
// // // // // Logical Operators:
// // // // let isAdult = true;
// // // // let hasLicense = false;
// // // // console.log(isAdult && hasLicense); // Output: false
// // // // console.log(isAdult || hasLicense); // Output: true
// // // // // String Concatenation:
// // // // let firstName = "John";
// // // // let lastName = "Doe";
// // // // let fullName = firstName + " " + lastName;
// // // // console.log(fullName); // Output: John Doe
// // // // // String Length:
// // // // let message = "Hello, World!";
// // // // console.log(message.length); // Output: 13
// // // // // Conditional Statements:
// // // // let age = 20;
// // // // if (age >= 18) {
// // // //     console.log("You are eligible to vote.");
// // // // } else {
// // // //     console.log("You are not eligible to vote yet.");
// // // }
// // // // Output: You are eligible to vote.

// // // // hw yetr
// // // // function checkNumber(num) {
// // // //     if (isNaN(num)) {
// // // //         console.log("Variable is not a number");
// // // //     } else {
// // // //         console.log("Variable is a valid number");
// // // //         if (num % 2 === 0) {
// // // //             console.log("Number is even");
// // // //         } else {
// // // //             console.log("Number is odd");
// // // //         }
// // // //     }
// // // // }

// // // // function findLargest(num1, num2, num3) {
// // // //     if (num1 > num2 && num1 > num3) {
// // // //         console.log("num1 is the largest");
// // // //     } else if (num2 > num3) {
// // // //         console.log("num2 is the largest");
// // // //     } else {
// // // //         console.log("num3 is the largest");
// // // //     }
// // // // }

// // // // function checkTriangle(side1, side2, side3) {
// // // //     if (side1 === side2 && side2 === side3) {
// // // //         console.log("Equilateral triangle.");
// // // //     } else if (side1 === side2 || side2 === side3 || side1 === side3) {
// // // //         console.log("Isosceles triangle.");
// // // //     } else {
// // // //         console.log("Scalene triangle.");
// // // //     }
// // // // }

// // // // function performOperation(num1, num2, operation) {
// // // //     switch (operation) {
// // // //         case "add":
// // // //             console.log("Result of num1+num2:", num1 + num2);
// // // //             break;
// // // //         case "subtract":
// // // //             console.log("Result of num1-num2:", num1 - num2);
// // // //             break;
// // // //         case "multiply":
// // // //             console.log("Result of num1*num2:", num1 * num2);
// // // //             break;
// // // //         case "divide":
// // // //             console.log("Result of num1/num2:", num1 / num2);
// // // //             break;
// // // //         case "modulus":
// // // //             console.log("Result of num1%num2:", num1 % num2);
// // // //             break;
// // // //         default:
// // // //             console.log("Invalid operation");
// // // //     }
// // // // }

// // // // function findGrade(marks) {
// // // //     if (marks >= 90 && marks <= 100) {
// // // //         console.log("S grade");
// // // //     } else if (marks >= 80 && marks < 90) {
// // // //         console.log("A grade");
// // // //     } else if (marks >= 70 && marks < 80) {
// // // //         console.log("B grade");
// // // //     } else if (marks >= 60 && marks < 70) {
// // // //         console.log("C grade");
// // // //     } else if (marks >= 50 && marks < 60) {
// // // //         console.log("D grade");
// // // //     } else if (marks >= 40 && marks < 50) {
// // // //         console.log("E grade");
// // // //     } else if (marks >= 0 && marks < 40) {
// // // //         console.log("Student has failed");
// // // //     } else {
// // // //         console.log("Invalid marks");
// // // //     }
// // // // }

// // // // // Example usage:
// // // // checkNumber(5); // Variable is a valid number, Number is odd
// // // // findLargest(10, 20, 15); // num2 is the largest
// // // // checkTriangle(5, 5, 5); // Equilateral triangle.
// // // // performOperation(10, 5, "add"); // Result of num1+num2: 15
// // // // findGrade(85); // A grade

// // // let number1 = 10;

// // // Check if number1 is even or odd
// // // if (typeof number1 === 'number') {
// // //     if (number1 % 2 === 0) {
// // //         console.log("Number is even");
// // //     } else {
// // //         console.log("Number is odd");
// // //     }
// // // } else {
// // //     console.log("Variable is not a number");
// // // }

// // // let number2 = 5;

// // // Check if number2 is even or odd
// // // if (typeof number2 === 'number') {
// // //     if (number2 % 2 === 0) {
// // //         console.log("Number is even");
// // //     }else{
// // //         console.log("Number is odd");
// // //     }
// // // }else{
// // //     console.log("Number2 is Number");
// // // }
// // // hw yetr
// // // Check if a number is positive, negative, or zero
// // // function checkNumberType(num) {
// // //     if (isNaN(num)) {
// // //         console.log("Variable is not a number(NaN)");
// // //     } else {
// // //         console.log("Number is Number");
// // //     }
// // // } 

// // // let num1 = 8;
// // // let num2 = 6;

// // // Check if num1 is greater than num2
// // // if (typeof num1 === 'number' && typeof num2 === 'number') {
// // //     if (num1 > num2) {
// // //         console.log("num1 is the largest");
// // //     } else if (num1 < num2) {
// // //         console.log("num2 is the largest");
// // //     } else {
// // //         console.log("num1 and num2 are equal");
// // //     }
// // // }

// // // let num3 = 12;

// // // Check if num1 is greater than num2 and num3
// // // if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
// // //     if (num1 > num2 && num1 > num3) {
// // //         console.log("num1 is the largest");
// // //     } else if (num2 < num3) {
// // //         console.log("num2 is the largest");
// // //     } else {
// // //         console.log("num3 is the largest");
// // //     }
// // // }

// // // let side1 = 5;
// // // let side2 = 5;
// // // let side3 = 5;

// // // Check type of triangle
// // // if (side1 === side2 && side2 === side3) {
// // //     console.log("Equilateral triangle.");
// // // } else if (side1 === side2 || side2 === side3||side1===side3) {
// // //     console.log("Isosceles triangle.");
// // // } else {
// // //     console.log("Scalene triangle.");
// // // }

// // // let operation = "multiply";

// // // Perform arithmetic operation
// // // if (operation === "add") {
// // //     console.log("Result of addition: " + (num1 + num2));
// // // } else if (operation === "subtract") {
// // //     console.log("Result of subtraction: " + (num1 - num2));
// // // } else if (operation === "multiply") {
// // //     console.log("Result of multiplication: " + (num1 * num2));
// // // } else if (operation === "divide") {
// // //     console.log("Result of division: " + (num1 / num2));
// // // } else if (operation === "modulus") {
// // //     console.log("Result of modulus: " + (num1 % num2));
// // // } else {
// // //     console.log("Invalid operation");
// // // }

// // // let marks = 75;

// // // Check grade based on marks
// // // if (typeof marks === 'number') {
// // //     if (marks >= 90 && marks <= 100) {
// // //         console.log("S grade");
// // //     } else if (marks >= 80 && marks < 90) {
// // //         console.log("A grade");
// // //     } else if (marks >= 70 && marks < 80) {
// // //         console.log("B grade");
// // //     } else if (marks >= 60 && marks < 70) {
// // //         console.log("C grade");
// // //     } else if (marks >= 50 && marks < 60) {
// // //         console.log("D grade");
// // //     } else if (marks >= 40 && marks < 50) {
// // //         console.log("E grade");
// // //     } else if (marks >= 0 && marks < 40) {
// // //         console.log("Student has failed");
// // //     } else {
// // //         console.log("Invalid marks");
// // //     }
// // // }
// // // js loops example
// // // console.log("loop:");
// // // for (let i = 1; i <= 5; i++) {
// // //     console.log("Iteration", i);
// // // }

// // // Program to determine whether a given number is positive or negative
// // function checkPositiveOrNegative(number) {
// //     if (number > 0) {
// //         console.log("Positive");
// //     } else if (number < 0) {
// //         console.log("Negative");
// //     } else {
// //         console.log("Zero");
// //     }
// // }

// // // Program to check if a number is even or odd
// // function checkEvenOrOdd(number) {
// //     if (number % 2 === 0) {
// //         console.log("Even");
// //     } else {
// //         console.log("Odd");
// //     }
// // }

// // // Program to determine the greater of two numbers
// // function findGreaterNumber(num1, num2) {
// //     if (num1 > num2) {
// //         console.log(num1 + " is greater.");
// //     } else if (num2 > num1) {
// //         console.log(num2 + " is greater.");
// //     } else {
// //         console.log("Both numbers are equal.");
// //     }
// // }

// // // Program to transform a numerical grade to a letter grade
// // function gradeToLetter(grade) {
// //     if (grade >= 90) {
// //         console.log("A");
// //     } else if (grade >= 80) {
// //         console.log("B");
// //     } else if (grade >= 70) {
// //         console.log("C");
// //     } else if (grade >= 60) {
// //         console.log("D");
// //     } else {
// //         console.log("F");
// //     }
// // }

// // // Program to calculate ticket price based on age
// // function calculateTicketPrice(age) {
// //     if (age < 12) {
// //         console.log("Ticket Price: $5");
// //     } else if (age < 18) {
// //         console.log("Ticket Price: $10");
// //     } else if (age < 60) {
// //         console.log("Ticket Price: $20");
// //     } else {
// //         console.log("Ticket Price: $15");
// //     }
// // }

// // // Program to determine if a year is a leap year
// // function isLeapYear(year) {
// //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// //         console.log(year + " is a leap year.");
// //     } else {
// //         console.log(year + " is not a leap year.");
// //     }
// // }

// // // Program to calculate discount based on purchase amount
// // function calculateDiscount(amount) {
// //     if (amount >= 100) {
// //         console.log("Discount: 20%");
// //     } else if (amount >= 50) {
// //         console.log("Discount: 10%");
// //     } else {
// //         console.log("No discount available.");
// //     }
// // }

// // // Program to greet the user based on time of day
// // function greetUser() {
// //     const hour = new Date().getHours();
// //     if (hour < 12) {
// //         console.log("Good morning!");
// //     } else if (hour < 18) {
// //         console.log("Good afternoon!");
// //     } else {
// //         console.log("Good evening!");
// //     }
// // }

// // // Program to calculate BMI and categorize it
// // function calculateBMI(weight, height) {
// //     const bmi = weight / (height * height);
// //     console.log("BMI:", bmi);
// //     if (bmi < 18.5) {
// //         console.log("Underweight");
// //     } else if (bmi < 25) {
// //         console.log("Normal weight");
// //     } else if (bmi < 30) {
// //         console.log("Overweight");
// //     } else {
// //         console.log("Obesity");
// //     }
// // }

// // // Number guessing game
// // function numberGuessingGame(secretNumber, guess) {
// //     if (guess === secretNumber) {
// //         console.log("Congratulations! You guessed the correct number.");
// //     } else if (guess < secretNumber) {
// //         console.log("Too low. Try again.");
// //     } else {
// //         console.log("Too high. Try again.");
// //     }
// // }

// // // For loops
// // // #1 Print the numbers from 0 to 15
// // console.log("Numbers from 0 to 15:");
// // for (let i = 0; i <= 15; i++) {
// //     console.log(i);
// // }

// // // #2 Print the numbers from 12 to 24
// // console.log("Numbers from 12 to 24:");
// // for (let i = 12; i <= 24; i++) {
// //     console.log(i);
// // }

// // // #3 Print the ODD numbers from 7 to 31
// // console.log("Odd numbers from 7 to 31:");
// // for (let i = 7; i <= 31; i++) {
// //     if (i % 2 !== 0) {
// //         console.log(i);
// //     }
// // }

// // // #4 Print the EVEN numbers from 10 to -20
// // console.log("Even numbers from 10 to -20:");
// // for (let i = 10; i >= -20; i--) {
// //     if (i % 2 === 0) {
// //         console.log(i);
// //     }
// // }

// // // #5 Print Fizz, Buzz, or FizzBuzz
// // console.log("FizzBuzz:");
// // for (let i = 1; i <= 45; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //         console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(i);
// //     }
// // }
// // hw for 2/13/2024
// const cars = ["Toyota", "Honda", "Ford"];

// // console.log(cars.length);
// // console.log(cars.toString());
// // console.log(cars.at(1));
// // console.log(cars.join("*"));

// // let removedCar = cars.pop();
// // cars.pop()
// // console.log(removedCar);
// // console.log(cars);

// // cars.push("BMW");
// // console.log(cars);

// const shiftedCar = cars.unshift("suzuki-800");
// console.log(shiftedCar);
// console.log(cars);
// cars.pop()
// console.log(cars);

// // cars.unshift("Tesla");
// // console.log(cars);

// // delete cars[1];
// // console.log(cars);

// // const cars1 = ["Toyota", "Honda"];
// // const cars2 = ["Ford", "BMW"];
// // const allCars = cars1.concat(cars2);
// // console.log(allCars);

// // cars.copyWithin(2, 0, 2);
// // console.log(cars);

// // const nestedArray = [1, 2, [3, 4], 5];
// // const flatArray = nestedArray.flat();
// // console.log(flatArray);

// // const removedItems = cars.splice(1, 2);
// // console.log(removedItems);
// // console.log(cars);

// // const slicedCars = cars.slice(1, 3);
// // console.log(slicedCars);
// // console.log(cars);

// // hw 2/16/2024
// const str = "Hello";

// console.log(str.length);
// const str = "Hello";

// console.log(str.charAt(1));
// const str = "Hello";

// console.log(str.charCodeAt(1));
// const str = "Hello";

// console.log(str.at(1));
// const str = "Hello";

// console.log(str[1]);
// const str = "Hello";

// console.log(str.slice(1, 3));
// const str = "Hello";

// console.log(str.substring(1, 3));
// const str = "Hello";

// console.log(str.substr(1, 3));
