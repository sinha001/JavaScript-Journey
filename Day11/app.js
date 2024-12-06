/*
Day 11: Callbacks, Promises, and Async Await in JavaScript

---> async await >> promise chains >> callback hell

1. Sync in JS:

--> Synchronous:
    Synchronous means the code runs in a particular sequence of instructions given in the program.
    Each instruction waits for the previous instruction to complete its execution.

--> Asynchronous:
    Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions,
    which causes a delay in the UI.
    Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

--->
**Instruction:**
To execute and understand the examples one by one, comment out all the code below except the first example. 
After executing and understanding the first example, you can uncomment the next one, and so on.
*/

// Asynchronous example
console.log("Zero");

function hello() {
  console.log("hello");
}

setTimeout(hello, 1000); // timeout;

setTimeout(() => {
  console.log("Welcome");
}, 500);

console.log("World");

/*
2. Callbacks:
--> A callback is a function passed as an argument to another function.
*/

// Don't comment out this function, it is used in many examples.
function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum); // sum is now callback

/*
Next, understand nesting:
*/

let age = 18;
if (age > 18) {
  if (age >= 60) {
    console.log("senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("junior");
}

// Nesting inside a loop:
for (let i = 1; i < 5; i++) {
  let str = "";
  for (let j = i; j < 5; j++) {
    str = str + j;
  }
  console.log(i, str);
}

/*
3. Callback Hell:
--> Nested Callbacks stacked below one another forming a pyramid structure.
    (Pyramid of Doom)
--> This style of programming becomes difficult to understand and manage.
*/

// Don't comment out this function, it is used in many examples.
function getData(dataID) {
  setTimeout(() => {
    console.log("data", dataID);
  }, 2000);
}

// print all the data after 2 seconds
getData(1);
getData(2);
getData(3);

// if we need each data after 3 seconds..
function getDataInfo(dataID, getNextData) {
  setTimeout(() => {
    console.log("data", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}

// Callback Hell..(Nested Callbacks)
getDataInfo(1, () => {
  console.log("getting data 2...");
  getDataInfo(2, () => {
    console.log("getting data 3...");
    getDataInfo(3);
  });
});

/*
4. Promises in JS:
--> Promise is for "eventual" completion of task.
--> It is an object in JS.
--> It is a solution to callback hell.

syntax: let promise = new Promise((resolve, reject) => {...})

Note: resolve & reject are callbacks provided by JS.

A JavaScript Promise object can be:
--> Pending: the result is undefined.
--> Resolved: the result is a value(fulfilled).     resolve(result);
--> Rejected: the result is an error object.        reject(error);

Note: Promise has state (pending, fulfilled) & some result (result for resolve & error for reject).
*/

// Don't comment out this function, it is used in many examples.
function getStudentInfo(StudentId, getNextStudentData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Student ID ", StudentId);
      resolve("success"); // promise is fulfilled/resolved.
      if (getNextStudentData) {
        getNextStudentData();
      }
    }, 10000);
  });
}

let p1 = getStudentInfo(8400);
console.log(p1);

// How to use Promises?

// .then() & .catch()

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("successful");
  });
};

let promises = getPromise();

promises.then((res) => {
  console.log("Promise State Fullfilled : ", res);
});

promises.catch((err) => {
  console.log("Promise State Rejected : ", err);
});

/*
Let's understand the main topic: Promise Chain via example
*/

function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some Info 1");
      resolve("successful");
    }, 11000);
  });
}

function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some Info 2");
      resolve("successful");
    }, 11000);
  });
}

// this is the example of fetching both the data at the same interval of time.
setTimeout(() => {
  console.log("fetching data 1 ");
}, 11000);
let promise1 = asyncFun1();
promise1.then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("fetching data 2 ");
}, 11000);
let promise2 = asyncFun2();
promise2.then((res) => {
  console.log(res);
});

// this is the example of promise chaining where each data will appear after the same interval of time.

function asyncFun3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("some Info 3");
      resolve("successful");
    }, 11000);
  });
}

setTimeout(() => {
  console.log("fetching data 1 for promise chain");
}, 11000);

asyncFun1().then((res) => {
  console.log("fetching data 2 for promise chain");
  asyncFun2().then((res) => {
    console.log("fetching data 3 for promise chain");
    asyncFun3().then((res) => {});
  });
});

/*
let's see the callback hell example & try to do with promise.
*/

function getDataInfo1(dataID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataID);
      resolve("successful");
      if (getNextData) {
        getNextData();
      }
    }, 3000);
  });
}

// promise chain:
getDataInfo1(123).then((res) => {
  console.log(res);
  getDataInfo1(231).then((res) => {
    console.log(res);
  });
});

// or..
getDataInfo1(951)
  .then((res) => {
    return getDataInfo1(851);
  })
  .then((res) => {
    return getDataInfo1(751);
  })
  .then((res) => {
    console.log(res);
  });

/*
5. Async-Await:
--> async function always returns a promise.
    Syntax:
        async function myFunction() {...}

--> await pauses the execution of its surrounding async function until the promise is settled.
*/

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  console.log("hello world!!");
  await api(); // 1st
  await api(); // 2nd
}

// automatically returns a promise...
getWeatherData();

// Now we are going to see how async-await work on previous getDataInfo() example..

async function getAllData() {
  console.log("getting data 10");
  await getDataInfo1(10);
  console.log("getting data 11");
  await getDataInfo1(11);
  console.log("getting data 12");
  await getDataInfo1(12);
  console.log("getting data 13");
  await getDataInfo1(13);
  console.log("getting data 14");
  await getDataInfo1(14);
} // more understandable than promise-chain & callback hell...

/*
IIFE: Immediately Invoked Function Expression..

--> IIFE is a function that is called immediately as soon as it is defined.
   Syntax:
        (function () {
            //...
        })();

        (() => {
            //..
        })();

        (async () => {
            //..
        })();
*/

// Example:
(async function () {
  console.log("getting data 10");
  await getDataInfo1(10);
  console.log("getting data 11");
  await getDataInfo1(11);
  console.log("getting data 12");
  await getDataInfo1(12);
  console.log("getting data 13");
  await getDataInfo1(13);
  console.log("getting data 14");
  await getDataInfo1(14);
})();
