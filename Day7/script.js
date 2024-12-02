/*
Day 7: Events in JavaScript
--> The change in the state of an object is known a Event.
--> Events are fired to notify code of "interesting changes" that may affect code execution.

..Mouse events (click, double click, etc..)
..Keyboard events (keypress, keyip, keydown)
..Form events (submit, etc.)
..Print event & many more.
*/

//Example 3: Event handling using JS..
let btn1 = document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
}

/*
Note 1: If there is inline handler and as well as js event handler for btn then, Js event handle has the highest priority.
Note 2: We cannot define event handler more than once because it will overwrite it.. 
*/ 
btn1.onclick=()=>{
    console.log("btn1 handler 2");
    let a = 25;
    a++;
    console.log(a); //26
}

btn1.innerText = "button 1";

/*
1. Event Object: 
--> It is a special object that has details about the event.
--> All the event handlers have access to the Event Object's properties and methods.

eg: e.target,e.type, e.clientX, e.clientY..
*/
let btn2 = document.querySelector("#btn2");
btn2.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}

/*
2. Event Listeners in JS:

--> node.addEventListener(event,callback)
--> node.removeEventListener(event,callback)

*Note:  the callback reference should be same to remove.
*/

let divBox = document.querySelector(".box");
divBox.addEventListener('mouseover', ()=>{
    console.log("you are hover mouse-inside eventListener example hanlder 1");
});

divBox.addEventListener('mouseover', ()=>{
    console.log("you are hover mouse-inside eventListener example hanlder 2");
});

/*divBox.addEventListener('mouseover', ()=>{
    console.log("you are hover mouse-inside eventListener example hanlder 3");
});
*/


divBox.addEventListener('mouseover', (evt)=>{
    console.log("you are hover mouse-inside eventListener example handler 4");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
});

divBox.removeEventListener('mouseover', ()=>{
    console.log("you are hover mouse-inside eventListener example hanlder 3");
}); // this will not remove the existed handler 3 because it is stored on the differnt place in the memory

//Now Understand the above issue:
const handler3 = ()=>{
    console.log("you are hover mouse-inside eventListener example hanlder 3");
};
divBox.addEventListener('mouseover', handler3);
divBox.removeEventListener('mouseover',handler3);

/*
Practise Q1: Create a toggle button that changes the screen to dark-mmpde when clicked &
             light-node when clicked again.
*/

let toggleBtn = document.querySelector("#toggleBtn");

let currMode = "light"; 
let body = document.querySelector("body");
toggleBtn.addEventListener("click",()=>{
    console.log("You are trying to change the mode");
    if(currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black"; or,
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        currMode = "light";
        //document.querySelector("body").style.backgroundColor = "white"; or,
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
});