// // // console.log("sudip");
// // "use strict"; // if using new js version  all JS code than use "use strict"

// // // alert( 3 + 3) // we are using nodejs, not using browser console so this is not  work

// // console.log(3 
// //     +
// //      3) // code readability should be high understandable for all  the dev guyz

// // console.log("Butwal")


// // let name = "Suren"
// // let age = 24
// // let isLoggedIn = false
// // let state;

// // // number => 2 to power 53
// // // bigint
// // // string => ""
// // // boolean => true/false
// // // null => this always should be standalone value
// // // undefined => 
// // // symbol => unique


// // // object

// // console.log(typeof undefined); // undefined
// // console.log(typeof null); // object

// let score = "abcd"

// //console.log(typeof score);
// //console.log(typeof(score));

// let valueInNumber = Number(score)
// //console.log(typeof valueInNumber);
// //console.log(valueInNumber);


// // "33" => 33
// // "33abc" => NaN
// //  true => 1; false => 0

// let isLoggedIn = "suren"

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// //  console.log(booleanIsLoggedIn);

// // 1 => true; 0 => false
// // "" => false
// // "hitesh" => true

// let someNumber = 23

// let stringNumber = String(someNumber)
// // console.log(stringNumber);
// // console.log(typeof stringNumber);

// // *********************** Operations ***********************

// let value = 3
// let negValue = -value
// // console.log(negValue);

// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2**3);
// // console.log(2/3);
// // console.log(2%3);

// let str1 = "hello"
// let str2 = " students"

// let str3 = str1 + str2
// // console.log(str3);

// // console.log("1" + 2);
// // console.log(1 + "2");
// // console.log("1" + 2 + 2);
// // console.log(1 + 2 + "2");

// // console.log( (3 + 4) * 5 % 3);

// // console.log(+true);
// // console.log(+"");

// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// // link to study
// // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


// const accountId = 12345
// let accountEmail = "abc@google.com"
// var accountPassword = "123123"
// accountCity = "butwal"
// let accountState;
// // accountId = "53652636"

// // accountId = 2 // not allowed


// accountEmail = "somarjun@tech.com"
// accountPassword = "21212121"
// accountCity = "sita rice mill"

// // console.log(accountId);

// /*
// Prefer not to use var
// because of issue in block scope and functional scope
// */


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// // let str1 = "hello"
// // let str2 = "   world"
// // let str3 = str1 + str2
// // console.log(str3)

// //Operators
// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2**3);
// // console.log(2/3);
// // console.log(2%3);













//homework of feb5//practice
//

//01//operators 
//addition//Subtraction//multiplication//Division//modulus
let a = 5;
let b = 15;
let c= 5;
let d = 10;
let results = ((((a+b)-c)*c)/5)%2;
console.log(results);
// **	Exponentiation (ES2016)
console.log(5**2);

//comparision operators of javascript
// == is equal to
console.log(a==b);
console.log(a==c);
let s = "5";
console.log(a==s);

//=== is strictikly equal to
console.log(a===s);
console.log(a===c);
//!= not equal to
console.log(a!=d);

//!== not identical
console.log(a!==s);
console.log(a!==c);

//> Greater than
console.log(a>b);
console.log(a<b);

//>= grater than or equal to
console.log(a<=b);
console.log(a>=b);

//JavaScript Bitwise Operators

console.log(a==b & a==s);//like multiplication
console.log(a==b | a==s);//like addition


console.log(true && false);

// Logical OR (||)
console.log(true || false); 

// Logical NOT (!)
console.log(!true); 

// 03 // String Concatenation
let firstName = "sudip";
let lastName = "rayamajhi";
let fullName = firstName + " " + lastName;
console.log(fullName); 

// 04 // String Length
let message = "Hello, World!";
console.log(message.length); 

// 05 // Conditional Statements
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}