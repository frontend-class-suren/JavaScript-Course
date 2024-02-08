/*avaScript Loops
Loops are handy, if you want to run the same code over and over again, each time with a different value.
JavaScript Loops
The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops.
 It makes the code compact. It is mostly used in array.

There are four types of loops in JavaScript.

1-for loop
2-while loop
3-do-while loop
4-for-in loop

1) JavaScript For loop
The JavaScript for loop iterates the elements for the fixed number of times.
 It should be used if number of iteration is known. 
 The syntax of for loop is given below.

 for (initialization; condition; increment)  
{  
    code to be executed  
}  

nishal =1
1+1=nishal
*/

// for (i= 1; i<=10; i++)  
// {  
// console.log("nbvjhdsfioviosdjiovnseiojnv34859082349025inkfvnidnmcv"+"hijcffsdgbjkbcvjksadbjkvc bsdjkbvjkdsbvjnishal")  
// } 


/*
JavaScript do while loop
The JavaScript do while loop iterates the elements for the infinite number of times like while loop. 
But, code is executed at least once
 whether condition is true or false. The syntax of do while loop is given below.

do{  
    code to be executed  
}while (condition);  
*/

// var i=21;  
// do{  
// console.log(i + "<br/>");  
// i++;  
// }while (i<25); 
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i <= 5);
/*
while statement
A while statement executes its statements as long as a 
specified condition evaluates to true. A while statement looks as follows:
while (condition)
  statement

  f the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. 
If the condition returns false, execution stops, and control is passed to the statement following while.
*/
// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++; //n=0+1 =>1
//   x += n; // x= x+n
// // for(i=0;i<3; i++)
//   // x= 0+1 =>1 ,n=1
//   //x = 1+ 2 => 3 ,n=2
//   // x= 3+ 3 =>6 ,n=3
//   console.log(x)
// }