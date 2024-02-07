// Print “Number is even” if the number is divisible by 2.


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































