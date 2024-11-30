/*
Day 5: DOM Part 1...

1. Window Object: 
--> The window oject represents an open window in a browser. 
    It is brower's object (not JS) & is automatically created by browser.
--> It is a global object with lots of properties and methods.
*/

console.log("hello");
window.console.log("hello2");

/*
2. What is DOM?
--> When a webpage is loaded, the browser creates a Document Object Model(DOM) of the page.
*/
console.log(window);
console.dir(window);
console.dir(window.document); //console.dir --> document --> print properties & methods.
console.dir(document.body);
console.log(document.body); //Accessing html through javascript....
console.log(document.body.childNodes[1]);
document.body.style.background = "yellow";

/*
3. DOM Manipulation:
    a. Selecting with id: document.getElementById("myId");
    b. Selecting with class: document.getElementByClassName("myClass"); --> returns HTML Collection 
    c. Selecting with tag: document.getElementByTagName("p");
    d. Query Selector: document.querySelector("myId/myClass/tag") --> returns first element, or
                        document.querySelectorAll("myId/myClass/tag")--> returns a NodeList..
*/

let heading = document.getElementById("heading");
console.dir(heading);

let headings = document.getElementsByClassName("heading3");
console.dir(headings);

let paras = document.getElementsByTagName("p");
console.dir(paras);

//search on the basis of tag
let elements1st = document.querySelector("p"); //returns 1st element
console.dir(elements1st);

let allElements = document.querySelectorAll("p");
console.dir(allElements);

//search on the basis of className..
elements1st = document.querySelector(".heading3");
console.dir(elements1st);

//search on the basis of id..
elements1st = document.querySelector("#heading");
console.dir(elements1st);

/*
4. DOM Manipulation - Properties:
    a. tagName: returns a tag for element nodes.
    b. innerText: returns the text content of the element and all its children.
    c. innerHTML: returns the plain text or HTML contents in the element.
    d. textContent: returns textual content even for hidden elements.
*/

console.log(elements1st.tagName);
console.log(document.querySelector("div").children); //used for navigation.

let div = document.querySelector("#mydiv");
console.dir(div.innerText);
console.dir(div.innerHTML);

let heading2 = document.querySelector("h2");
heading2.innerText = "Fruits Unordered List";
heading2.innerHTML = "<i>Fruits Unordered List</i>";

console.log(heading2.textContent); // you need to remove comment syntax from h2 from style.css

/*
Practise Q1: Create a H2 heading element with text - "Hello Javascript".
             Append "from Nishant Sinha" to this text using JS.
*/

heading2 = document.querySelector(".heading2");
console.dir(heading2);

heading2.innerText = heading2.innerText + " from Nishant Sinha";

/*
Practise Q2: Create 3 divs with common class name - "box". 
             Access them and add some unique text to each of them.
*/

let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "New Unique 1";
divs[1].innerText = "New Unique 2";
divs[2].innerText = "New Unique 3";

//or...
for(let div = 0;div<divs.length;div++){
    divs[div].innerText = "Latest New Unique" + (div+1);
}
