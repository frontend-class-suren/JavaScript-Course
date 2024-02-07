let num1 = 2;
let num2 = 2;

let additionResult = num1 + num2; // Addition
// let subtractionResult = num1 - num2; // Subtraction
// let multiplicationResult = num1 * num2; // Multiplication
// let divisionResult = num1 / num2; // Division
// let modulusResult = num1 % num2; // Modulus
// let exponentiationResult = num1 ** num2; // Exponentiation

// let a = 5;
// let b = "5";

// console.log(a == b); // Loose equality, true
// console.log(a === b); // Strict equality, false
// console.log(a != b); // Loose inequality, false
// console.log(a !== b); // Strict inequality, true
// console.log(a > 3); // Greater than, true
// console.log(a < 10); // Less than, true
// console.log(a >= 5); // Greater than or equal to, true
// console.log(a <= 4); // Less than or equal to, false

// Check if a string is palindrome
function checkPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is not a palindrome");
    }
}

// Find the factorial of a number
function calculateFactorial(num) {
    if (isNaN(num) || num < 0) {
        console.log("Invalid input");
    } else {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log("Factorial of", num + ":", factorial);
    }
}

// Check if a number is prime
function checkPrime(num) {
    if (isNaN(num) || num <= 1) {
        console.log("Invalid input");
    } else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(num + " is a prime number");
        } else {
            console.log(num + " is not a prime number");
        }
    }
}

// Convert temperature between Celsius and Fahrenheit
function convertTemperature(temp, unit) {
    if (isNaN(temp)) {
        console.log("Invalid temperature");
    } else {
        if (unit.toLowerCase() === "celsius") {
            console.log(temp + "°C is", (temp * 9 / 5) + 32 + "°F");
        } else if (unit.toLowerCase() === "fahrenheit") {
            console.log(temp + "°F is", (temp - 32) * 5 / 9 + "°C");
        } else {
            console.log("Invalid unit");
        }
    }
}