//Arithmetic Operators..
let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
console.log("a*b = ", a*b);
console.log("a/b = ", a/b);
console.log("a%b = ", a%b);
console.log("a**b = ", a**b);  //exponentiation

//Unary Operators.. 
a++;
b--;
console.log("a = ", a, "& b = ",b);

++a;
--b;
console.log("a = ", a, "& b = ",b);

console.log("a++ = ",a++);
console.log("a = ",a); // same goes to a--
b++;

// Assignment Operators..
console.log("a+=1 = ", a+=1);
console.log("a-=1 = ", a-=1);
console.log("a*=b = ", a*=b);
console.log("a/=b = ", a/=b);
console.log("a%=b = ", a%=b);
console.log("a**=b = ", a**=b);

//Comparison Operators..
console.log("a==b ", a==b);
console.log("a>=b ", a>=b);
console.log("a<=b ", a<=b);
console.log("a!=b ", a!=b);
console.log("a===b ", a===b);
console.log("a!==b ", a!==b);
console.log("a>b ", a>b);
console.log("a>=b ", a>=b);
console.log("a<b ", a<b);
console.log("a<=b ", a<=b);

//Logical Operators..\
console.log("a = ", a, "& b = ", b);

let cond1 = a<b;
let cond2 = a===6;
console.log("cond1 && cond2 ", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("(!cond1) && cond2 ", (!cond1) && cond2);

//Conditional Statements..
let age = 14;
if(age>=18){
    console.log("You can vote..");
}
else{
    console.log("You can't vote..");
}

//Code 2: else-if statement..
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
else if(mode === "light"){
    color = "white";
}
else{
    color = undefined;
}
console.log(color);

//Code for finding odd or even..
let num = 15;
if(num%2===0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//Ternary Operator..
console.log("age = ",age);
let result = age > 18? "adult":"not an adult";
console.log(result);

/*
Let's Practise: 

Q1. Get users to input a number using prompt("Enter a Number : "). Check if the number is a multiple of 5 or not.
Q2. Write a code which can gives grades ti students according to their scores:
    a. 90-100, A
    b. 70-89, B
    c. 60-69, C
    d. 50-59, D
    e. 0-49, F 
*/

//Code Q1..
let number = prompt("Enter a Number: ");
if(number % 5 === 0){
    console.log("True, it is a multiple of 5");
}
else{
    console.log("false, it is not a multiple of 5");
}

//Code Q2..
let marks = prompt("Enter a marks : ");
let grade;
if(marks>=90 && marks<=100){
    grade = "A";
}
else if(marks>=70 && marks<=89){
    grade = "B";
}
else if(marks>=60 && marks<=69){
    grade = "C";
}
else if(marks>=50 && marks<=59){
    grade = "D";
}
else{
    grade = "F";
}
console.log("Grade = ", grade);