// Print “Number is even” if the number is divisible by 2.

// let num = 10;

// let num = 5;
//  if (num%2==0){
//     console.log("Number is even");
//  }
//  else{
//     console.log("Number is odd");
//  }


// Print “Variable is not a number” if isNaN() returns true.

// let variable = "amit";
// if (isNaN(variable)) {
//     console.log("Variable is not a number");
// } else {
//     console.log("Variable is a number");
// }

// Else print “Variable is a valid number” if isNaN() returns false.

// let variable = "123";
// if (isNaN(variable)) {
//     console.log("Variable is not a number");
// } else {
//     console.log("Variable is a valid number");
// }

// Print num1 is the largest if num1>num2.
/*let num1 = 10;
  let num2 = 5;

if (num1 > num2) {
    console.log("num1 is the largest");
} */

// Print num2 is the largest if num1<num2.
/* let num1 = 10;
   let num2 = 20;

   if(num2 > num1){
    console.log("num2 is the largest");
   }

   */

// Else print num1 and num2 are equal when num1==num2.
   /*
let num1 = 10;
let num2 = 10;

if (num1 > num2) {
    console.log("num1 is the largest");
} else if (num1 === num2) {
    console.log("num1 and num2 are equal");
} else {
    console.log("num2 is the largest");
}
*/

// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.
/*
let num1 = 20;
let num2 = 15;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the largest");
} else {
    console.log("num3 is the largest");
} 
*/

// Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// Else “Scalene triangle.” since values of all sides are unequal.
/*
let side1 = 20;
let side2 = 20;
let side3 = 10;

if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("Isosceles triangle.");
} else {
    console.log("Scalene triangle.");
}
 */

// Print result of num1+num2 if operation is “add”
// Print result of num1-num2 if operation is “subtract”
// Print result of num1*num2 if operation is “multiply”
// Print result of num1/num2 if operation is “divide”
// Print result of num1%num2 if operation is “modulus”
// Else print “Invalid operation”
/*
let num1 = 20;
let num2 = 10;
let operation = "subtract";

let result;

if (operation === "add") {
    result = num1 + num2;
    console.log("Result of addition:", result);
} else if (operation === "subtract") {
    result = num1 - num2;
    console.log("Result of subtraction:", result);
} else if (operation === "multiply") {
    result = num1 * num2;
    console.log("Result of multiplication:", result);
} else if (operation === "divide") {
    result = num1 / num2;
    console.log("Result of division:", result);
} else if (operation === "modulus") {
    result = num1 % num2;
    console.log("Result of modulus:", result);
} else {
    console.log("Invalid operation");
}

*/

/*
Function `findGrade()` to find the grade of the student based on the input marks.

Print “S grade” if marks is between 90 and 100.
Print “A grade” if marks is between 80 and 90.
Print “B grade” if marks is between 70 and 80.
Print “C grade” if marks is between 60 and 70.
Print “D grade” if marks is between 50 and 60.
Print “E grade” if marks is between 40 and 50.
Print “Student has failed” if marks is between 0 and 40.
Else print “Invalid marks”.
*/

/*
function findGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
        console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
        console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
        console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
        console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
        console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
        console.log("Student has failed");
    } else {
        console.log("Invalid marks");
    }
}

let studentMarks = 90;
findGrade(studentMarks);


*/

// for loop

// increment

// for(a=1; a<5; a++){
//     console.log(a)
// }

// decrement

// for(i=10;i>=1; i--){
//     console.log(i)
// }

// to count even number 

// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
//   }

// to count odd number 

// for(let i=1; i<=50; i+=2){
//     console.log(i);
// }

// for string?

//  for(a=1; a<8; a++){

//      console.log('amit')
//  }
  

// do-while

// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);


// homework

// #1 — Print the numbers from 0 to 15

// for 

// for(i=0; i<=15; i++){
//     console.log(i);
// }

// do while 

// let i=0;
// do {
//     i+=1;
//     console.log(i);
// }
// while(i<15);


// #2 — Print the numbers from 12 to 24


// for(i=12; i<=24; i++){
//     console.log(i);
// }

// #3 — Print the ODD numbers from 7 to 31

// for(i=7;i<=31;i+=2) {
//     console.log(i);
// }


// #4 — Print the EVEN numbers from 10 to -20

// for(i=10; i>=-20; i-=2){
//     console.log(i)
// }

// #5 — Iterate through all numbers from 1 to 45. Print the following:
//     For multiples of 3 print “Fizz”
//     For multiples of 5 print “Buzz”
//     For multiples of 3 and 5 print “FizzBuzz”

// first one didnot work 

// for (let i = 1; i <= 45; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");                                    
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 45; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }


// Calculate the sum of all the numbers in the following array
//     var numbersArray = [1,13,22,123,49]

// var numbersArray = [1, 13, 22, 123, 49];
// var sum = 0;
// for (var i = 0; i < numbersArray.length; i++) {
//     sum += numbersArray[i];
// }
// console.log("The sum is:", sum);

// Print the numbers 0 - 20, one number per line.
// for (let i = 0; i <= 20; i++) {
//     console.log(i);
// }


// Print only the ODD values from 3 - 29, one number per line.
// for (let i = 3; i <= 29; i += 2) {
//     console.log(i);
// }



// Print the EVEN numbers 12 down to -14 in descending order, one number per line.

// let number = 12;

// while (number >= -14) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number -= 2;
// }

// Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

// for (let i = 50; i >= 20; i--) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }



// In the loop, determine if each number is even or odd, then put that number into evens or odds, as appropriate.


// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log("Even Numbers:", i);
//     } else {
//         console.log("Odd Numbers:", i);
//     }
// }





























