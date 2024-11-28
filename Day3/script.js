/*
Day 4: Arrays in JavaScript.

Arrays ---> Linear Representation of same type of data..
Arrays are collections of items. Array is object type.
Array is mutnle.
Create Array eg1: 
*/

let marks = [98,87,58,78,36];
console.log(marks);
console.log(marks.length); //property

let heroes = ["Krrish", "Shaktiman", "Hanuman"];
console.log(heroes);
console.log(typeof heroes);

console.log(marks[0]); //Array index
console.log(marks[20]);

//Change the value of arr at position 2..

let arr = [78,87,58,99,78];
console.log(arr);
arr[3] = 67;
console.log(arr);


/*
1. Looping over an Array:
---> Print all elements of an array.
*/

//using for loop:
heroes = ["Krrish", "Shaktiman", "Hanuman", "Aswathama"];
for(let i = 0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}

//using for off loop:
let cities = ["delhi", "mumbai","chennai","noida","gurgaon","hyderabad"];
for(let city of cities)
{
    console.log(city.toUpperCase());
}

/*
 Practise Q1: For a given array wtih marks of students 
              [85,97,44,37,76,60].
              Find the average marks of the entire class.
 */

let studentMarks = [85,97,44,37,76,60];
let size = studentMarks.length;
let sum = 0; let avg;
for(let i of studentMarks)
{
    sum+=i;
}

avg = sum/size;
console.log(`The Average marks of entire class is : ${avg}`);

/*
Practise Q2: For a given array with prices of 5 items
             [250,645,300,900,50].
             All items have an offer of 10% OFF on them.
             Change the array to store the final price after applying offer.
*/

let items = [250,645,300,900,50];
for(let i = 0;i<items.length;i++)
{
    console.log(`value at index {i} = ${items[i]}`);
    let offer = items[i]/10;
    items[i] = items[i]-offer;
    console.log(`value after offer {i} = ${items[i]}`);

}

/*
3. Arrays Methods:
    a. push(): add at end.
    b. pop(): delete at end andd return.
    c. toString(): converts array to string.
    d. concat(): joins multiple arrays and return the result.
    e. unshift(): add to start.
    f. shift(): delete from start and return the result.
    g. slice(startIdx, endIdx): retuns a piece of an array.
    h. splice(startIdx, delCount, newEl1): change original array (add, remove, replace).
*/

let foodItems = ["Tomato", "Potato", "Brinjal", "Cauliflower", "Spinach", "LadyFinger"];
console.log("Food Items: ", foodItems);

foodItems.push("burger","pizza");
console.log("Food Items after push(): ", foodItems);

foodItems.pop();
console.log("Food Items after pop(): ", foodItems);

console.log("Food Items after toString(): ", foodItems.toString());

let marvelHeroes = ["Thor", "Antman", "Spiderman"];
let dcHeroes = ["Superman","Flash","Batman", "Wonder Woman"];
console.log(marvelHeroes.concat(dcHeroes));

console.log("Marvel Heroes:  ",marvelHeroes);
marvelHeroes.unshift("Captain America");
console.log("Marvel Heroes:  ",marvelHeroes);

console.log("DC Heroes:  ",dcHeroes);
let deletedHero = dcHeroes.shift();
console.log("DC Heroes:  ",dcHeroes);
console.log("Deleted Heroes:  ",deletedHero);

console.log("Slice(): ",marvelHeroes.slice(1,3));
console.log("Original Marvel Heroes: ", marvelHeroes);
console.log("splice(): ",marvelHeroes.splice(1,1,"Strange"));
console.log("Original Marvel Heroes: ", marvelHeroes);


//add element using splice()
let arr1 = [1,2,3,4,5,6,7,8,9];
arr1.splice(2,0,101);
console.log(arr1);

//delete element using splice()
arr1.splice(3,1);
console.log(arr1);

//replace element using splice()
arr1.splice(3,1,102);
console.log(arr1);

/*
Practise Q3: Create an array to store companies --> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Net".
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Net"];
console.log("Companies are: ", companies);

//a. remove the first company from the array..
console.log("deleted company: ",companies.shift());
console.log("Updated Companies are: ", companies);

//b. remove uber and add ola in its place..
companies.splice(1,1,"Ola");
console.log("Updated Companies are: ", companies);

//c. add amaazon at the end..
companies.push("Amazon");
console.log("Updated Companies are: ", companies);
