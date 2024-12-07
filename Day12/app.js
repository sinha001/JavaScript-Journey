/*
Day 12: Fetch API in JS (Last Chapter)

1. Fetch API:

--> The fetch API provides an interface for fetching(sending/receiving) resources.
--> It uses Request and respones Objects.
--> The fetch() method is used to fetch a resource (data).

    syntax:
        let promise = fetch(url,[options]); 


2. Understanding Terms:

a. AJAX is Asynchronous JS & XML
b. JSON is JavaScript Object Notation
c. json() method (asynchronous method): returns a second promise tht resolves the result of parsing the response body text as JSON.
                  (Input is JSON, output is JS Object).

Process: Response(JSON) -----> JS object(json() method)

*/

const URL = "https://meowfacts.herokuapp.com/";
const versePara = document.querySelector("#verse");
const btn = document.querySelector("#btn");

//GET request..
const getFacts = async () =>{
    console.log("Fetching Data...");
    let response = await fetch(URL);
    console.log(response); //JSON Format..
    let datas = await response.json();
    console.log(datas);
    console.log(datas.data[0]);
    versePara.innerText = datas.data[0];
};

/*
using promise chain: 
function getFacts(){
    fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((datas)=>{
            console.log(datas);
            versePara.innerText = datas.data[0];
        });
}
*/


btn.addEventListener("click", getFacts);

/*
3. Requests & Response

a. HTTP(Hyper Text Transfer Protocol) Verbs: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE,...
b. Response Status Code: 200-SUCCESS, 404-Bad Request

headers --> Additional Information
Note: HTTP Response headers also contain details about the responses, such as content type, HTTP  status code etc.

*/