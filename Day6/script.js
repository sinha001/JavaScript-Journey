/*
Day 6: DOM Part 2...

5. DOM Manipulation - Properties:
    a. Attributes: 
    --> getAttribute(attr) // to get the attribute value.
    --> setAttribute(attr) //to set the attribute value.

    b. Style: node.style
    
    c. Insert Elements: 
    --> node.append(el): adds at the end of the node(inside).
    --> node.prepend(el): adds at the start of the node(inside).
    --> node.before(el): adds before the node(outside).
    --> node.after(el): adds after the node(outside).
    
    d. Delete Element: 
    --> node.remove()
*/

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.setAttribute("class","newClass"));

div.style.backgroundColor = "yellow";
div.style.fontSize = "30px";

/*
1st step: create the element.
2nd step: then add it...
 */

let newBtn = document.createElement("button");
newBtn.innerHTML = "click me!!!";
console.log(newBtn);

let boxDiv = document.querySelector("#box");
let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i>This is the example of inserting elements</i>";
let newPara = document.createElement("p");
newPara.innerHTML = "<i>Chalo Shuru Karte Hain....</i>";
let newH1 = document.createElement("h1");
newH1.innerHTML = "DOM PART 2: Properties";
boxDiv.append(newHeading);
boxDiv.prepend(newPara);
boxDiv.after(newBtn);
boxDiv.before(newH1);

para.remove();

/*
Practise Q1: Create a new Button element. Give it a text "click me",
             background color of red & text color of white.

             Insert the button as the first element inside the div id = "practiseQ1" tag.

*/

let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color="white";

//Inserting the button...
let practiseDiv = document.querySelector("#practiseQ1");
practiseDiv.prepend(newButton);

/*
Practise Q2: Create a <p> tag in html, give it a class and some styling.
             Now, Create a new class in CSS and try to append this class to the <p> element.

             Did You notice, how you overwrite the class name when you add a new one?
             Solve this problem using classList.
*/

let newPara1 = document.querySelector(".q2");
newPara1.classList.add("newClass");
