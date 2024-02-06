// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators
//1-JavaScript Arithmetic Operators
// Arithmetic Operators are used to perform arithmetic on numbers:
// let a = 3;
// let x = (100 + 50) * a**2;
// console.log(x)

/*
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement

*/

/*

JavaScript Comparison Operators
The JavaScript comparison operator compares the two operands. The comparison operators are as follows:

Operator	Description	Example
==	Is equal to	10==20 = false
===	Identical (equal and of same type)	10==20 = false
!=	Not equal to	10!=20 = true
!==	Not Identical	20!==20 = false
>	Greater than	20>10 = true
>=	Greater than or equal to	20>=10 = true
<	Less than	20<10 = false
<=	Less than or equal to	20<=10 = false

*/

// var b = "3";
// var c = 3;

// // answer = b===c
// console.log(b==c)
// console.log(10!==10)

/*
JavaScript Bitwise Operators
The bitwise operators perform bitwise operations on operands. The bitwise operators are as follows:

Operator	Description	Example
&	Bitwise AND	(10==20 & 20==33) = false
|	Bitwise OR	(10==20 | 20==33) = false
^	Bitwise XOR	(10==20 ^ 20==33) = false
~	Bitwise NOT	(~10) = -10
<<	Bitwise Left Shift	(10<<2) = 40
>>	Bitwise Right Shift	(10>>2) = 2
>>>	Bitwise Right Shift with Zero	(10>>>2) = 2

*/

// console.log(2==2 & 2==3)

/*
JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/
//Example for Assignment Operators
// var x = 1
// x += 1
// console.log(x)
// console.log((2==='2')? 'Yes': 'No') 
// 10100


/*
JavaScript If-else
The JavaScript if-else statement is used to execute the code whether condition is true or false. There are three forms of if statement in JavaScript.

If Statement
If else statement
if else if statement
*/

//1-If Statement 

/*
Syntax:====>
if(expression|condition) {
    here is code
}

It evaluates the content only if expression is true. The signature of JavaScript if statement is given below.
*/
// let age=20;  
// if(age>18){  
// console.log("You are eligible for vote");  
// }

/*
avaScript If...else Statement
It evaluates the content whether condition is true of false. The syntax of JavaScript if-else statement is given below.

Syntax ==>
if(expression|condition){  
//content to be evaluated if condition is true  
}  
else{  
//content to be evaluated if condition is false  
}
*/
// let mark = 48
// if (mark > 50){
//     console.log("You Passed the exam")
// }else{
//     console.log("Sorry You Fail the exam")
// }

let width = 300
if(width >= 467){
console.log("this is a Large Screen")
}else{
 console.log("this mobile Screen")
}

