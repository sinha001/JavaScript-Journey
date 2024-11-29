/*
Day 4: Functions in JavaScript..

Functions: Block of code that performs a specific task,
           can be invoked whenever needed.
           
           a. remove redundancy..
           b. function parameters --> like local variables of function --> present in block scope.
function example 1:
*/

function myFunction() {
  console.log("Welcome to Learning Javascript");
  console.log("Day 4: Functions in JS");
} // function definition.

myFunction(); //function call (invoke)

//function example 2:
function myFn(msg) {
  console.log(msg);
}

myFn("Function Calling through parameter"); //argument

//function ---> 2 numbers, sum
function sum(a, b) {
  console.log(`the sum of a = ${a} & b = ${b} is ${a + b}`);
}
sum(5, 4);

//or,
function add(a, b) {
  //local variables --> scope
  s = a + b;
  return s;
}
let val = add(5, 8);
console.log(val);

/*
1. Arrow Functins:
--> Compact way of writing a function.
   Syntax: const functionName = (param1, param2,...)=>{
        //do some work..
    } 
--> Part of ModernJS.
Arrow function example 1:
*/

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(5, 6);

//Arrow function example 2:
const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(7, 8);

/*
Practise Q1: Create a function using "function" keyword that takes a string as an argument & 
             returns the number of vowels in the string.
*/

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U" ||
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
let res = countVowels("Nishant");
console.log(res);

/*
Practise Q2: Create an arrow function to perform the same task.
*/

let countArrowVowels = (str)=> {
    let count = 0;
    for (const char of str) {
      if (
        char === "A" ||
        char === "E" ||
        char === "I" ||
        char === "O" ||
        char === "U" ||
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        count++;
      }
    }
    return count;
  }
  let result = countArrowVowels("abcd");
  console.log(result);
  
/*
2. forEach loop in Arrays:
--> arr.forEach(callbackFunction)

CallbackFunction: Here, it is a function to execute for each element in an array.
--> A callback is a functin that passed as an argument to another function.
--> this is higher other function...
Example 1:
*/

let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});

//or..
let cities = ["Mumbai","Delhi", "Indore"];
cities.forEach((val,index,cities)=>{
    console.log(val.toUpperCase(), index,cities);
});

/*
Note: Higher Order Functions/Methods: methods either take another function as a parameter inside them or,
      return other function as an output.
*/

/*
Practise Q1: For a given array of numbers, print the square of each value using the forEach loop.
*/

let num = [1,2,3,4,5];
num.forEach((val)=>{
    console.log(val*val);
});

//let see another way of writing callback function..

let calcSquare = (val)=>{
    console.log(val**2);
};

num.forEach(calcSquare);

/*
3. Some More Array Methods:
    a. Map: Creates a new array with the results of some operation.
            The value its callback returns are used to form new array.
            syntax: arr.map(callbackFunction(value,index,array))

    b. Filter: Creates a new Array of elements that give true for a condition / filter.
    c. Reduce: Performs some operations and reduces the array to a single value.
               It returns that single value.
*/

//a. Map Example:
let numbers = [54,78,98];
numbers.map((val)=>{
    console.log(val);
});

//make a dupicate array..
let newArray = numbers.map((val)=>{
    return val;
});
console.log(newArray);

//b. Filter Example:
num = [5,6,7,8,9,10,15];
let evenArray = num.filter((val)=>{
    return val%2===0;
});
console.log(evenArray);

//c. Reduce Example:
arr = [1,2,3,4];
const output = arr.reduce((res,curr) => {
    return res+curr;
});
console.log(output);

//finding largest number using reduce method..
arr=[48,57,1,25];
const largest = arr.reduce((res,curr)=>{
    return res>curr?res:curr;
});
console.log(largest);

/*
Practise Q1: We are given an array of marks of students.
            Filter out of the marks of stuudents that scored 90+.
*/
let marks = [58,99,58,96,86,91];
let toppers = marks.filter((val)=>{
    return val>90;
});
console.log(toppers);

/*
Practise Q2: Take a number n as input from user. Create an array of numbers from 1 to n.
             Use reduce method to calculate the sum of all the numbers in the array.
             use reduce method to calculate the product of all numbers in the array.
*/

numbers = prompt("Enter a number: ");
let arr2=[];
for(let i  = 1;i<=numbers;i++)
{
    arr2[i-1] = i;
}

console.log("Array: ", arr2);

const sumNumber = arr2.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum = ",sumNumber);

const pro = arr2.reduce((res,curr)=>{
    return res*curr;
});
console.log("product = ",pro);
