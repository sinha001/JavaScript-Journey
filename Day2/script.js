/*
Day 2: Loops in JS..

1. for Loop
*/

//for-loop example1: Calculate the sum of 1 to 5.
let sum = 0;
for(let i = 1; i<=5;i++)
{
    sum += i;
}
console.log("Sum = ",sum);
console.log("Loop has ended...");

//for-loop example2: Calculate the sum of 1 to n.
let add = 0;
let n = 5;
for(let i = n;i>=1;i--)
{
    add+=i;
}
console.log("add of 1 to n is : ",add);
console.log("loop has ended..");

/*
Infinite Loop: A Loop that never ends.

code: 
for(let i = 1;i>=0;i++)
{
    console.log("i = ", i);
}
    Note: Don't try to run this code. 
          It will crash your browser.
*/

/*
2. While Loop:
*/

//while loop example1: print i till 5.
let i = 1;
while(i<=5)
{
    console.log("i = ",i);
    i++;
}

/*
3. Do-while Loop: atleast run once.
*/

//do-while loop example: 
let j = 15;
do
{
    console.log("j = ",j);
    j++;
} while(j<=5);

// 4. for-of loop example:
let str = "Nishant";
let size = 0;
for(let i of str){ 
    //iterator --> characters
    console.log("i = ",i);
    size++;
}
console.log("size = ",size);

// 5. for-in loop example:

let student = {
    name: "Nishant Sinha",
    age: 20,
    cgpa: 9.8,
    isPass: true
};  // object

for(let key in student){
    console.log("key = ", key, " value = ",student[key]);
}

//Practise Q1. Print even number from 0 to 100.
for(let num = 0;num<=100;num+=2)
{
    console.log(num);
}

//or,

for(let num = 0;num<=100;num++)
{
    if(num%2===0)
    {
        console.log("num = ",num);
    }
}


//Practise Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value.
let gameNum = 21;
let guessNum = prompt("Guess the Game Number: ");
console.log("Guess Number is: ", guessNum);

while(guessNum != gameNum){
    guessNum = prompt("Wrong Number, Guess the Game Number again: ");
    console.log("New Guess Number is = ",guessNum);

}
console.log("Congratulations, you entered the right number");

/*
Next Chapter: String in Javascript..

Strings:  Strings is a sequence of characters used to represent text.
*/
let str1 = "nishant";
let str2 = "sinha";

console.log(str1.length);
console.log(str2.length);
console.log(str2[3]);

/* 
Template Literals in JS:

example1.
*/
let specialString = `this is a template literal`;
console.log(typeof specialString);

//example 2:
let obj = {
    item: "pen",
    price: 10,
};
console.log("the cost of ", obj.item, " is ",obj.price, "rupees");
//or use template literals..
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//escape character: \n,\t..
let str3 = "Nishant\nSinha";
console.log(str3);
console.log(str3.length);

/*
String Methods: toUpperCase, toLowerCase, trim()
*/

let str4 = "   Apna JavaScript ";
console.log("string = ",str4);
console.log("UpperCase: ", str4.toUpperCase());
console.log("LowerCase: ", str4.toLowerCase());
console.log("Trim: ", str4.trim()); 
console.log("slice: ", str4.slice(1,8));
console.log("Concat: ", str4.concat("Best")); 
console.log("Replace: ", str4.replace("JavaScript","Java")); 
console.log("CharAt: ", str4.charAt(3)); 


/*
Practise Q3. Prompt the user to enter the full name. 
Generate a username for them based on the input. 
Start username with @, followed by their full name,
and ending with the full name length.

eg: user name = nishantsinha", username should be "@nishantsinha12"
*/

let userName = prompt("Enter your fullName: ");
console.log(("@".concat(userName)).concat(str.length));