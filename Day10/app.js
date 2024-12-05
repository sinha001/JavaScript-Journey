/*
Day 10: Classes & Object in JS.

--> A Javascript object is an entity having state and behaviour(properties & method).
--> JS objects have a special property called prototype.
--> We can set prototype using __proto__ .
--> If Obj & prototype have same method, objects method will be used.
*/

//direct way of creating object...
const student = {
    id: 1,
    fullName:"Nishant Sinha",
    marks: 98,
    printMarks: function(){
        console.log("marks = ",this.marks); //this.marks --> student.marks
    },
};

console.log(student);
console.log(student.printMarks());

//prototype example:
const employee = {
    calcTax1(){
        console.log("tax rate is 10%");
    },
    calcTax2: function(){
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
    calcTax(){
        console.log("tax rate is 20%");
    }
};

karanArjun.__proto__ = employee; //inherit the properties and method of obj1(employee)..
console.log(karanArjun);

console.log(karanArjun.calcTax()); //--> If Obj & prototype have same method, objects method will be used.


/*
1. Classes in JavaScript

--> Class is a program-code template (blueprint) for creating objects.
--> Those objects will have some state (variables) & some behaviours (functions) inside it.

class MyClass{
    constructor(){..}
    myMethod(){...}
}

let myObj = new MyClass();
*/

class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName = brand; //this.brandName = object property..
    }
}

let fortuner = new ToyotaCar();
fortuner.start();
fortuner.stop();
fortuner.setBrand("fortuner");
console.log(fortuner);

console.log(typeof fortuner);

let lexus = new ToyotaCar();
lexus.start();

/*
2. Constructor() method is:

--> automatically invoked by new
--> initializes object
*/

class ToyotaCar1{
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let Supra = new ToyotaCar1("Supra", 10);
console.log(Supra);

/*
4. Inheritance in JS:

--> Inheritance is passing down properties and methods from parent class to child class.
example: 

class Parent{

}
class Child extends Parent{ //child class -->derived class

}

Note: if child & parent have same method, child's method will be used. [Method Overriding]...
*/

class Parent{
    hello()
    {
        console.log("Hello");
    }
}

class Child extends Parent{

}

let obj = new Child();
obj.hello();

//example 2:
class Person{
    constructor(){
        this.species = "homosapiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }   

    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat patient");
    }
}

let nishantObj = new Engineer();
nishantObj.work();
nishantObj.eat();
console.log(nishantObj);

/*
5. super Keyword:

--> the super keyword is used to call the constructor of its parent class to access the parent's properties & methods.

super(args) // calls Parent's constructor
super.parentMethod(args)
*/

class People{
    constructor(name){
        console.log("enter parent class");
        this.species = "homosapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
}

class Teacher extends People{
    constructor(branch, name){
        console.log("enter child class");
        super(name); //to invoke the parent class constructor
        this.branch = branch;
        console.log("exit child class");

    }
    work(){
        super.eat();
        console.log("Solve problems, build something");
    }
}
let teacher1 = new Teacher("Chemistry", "nishant");
console.log(teacher1);
teacher1.work();

/*
Practise Q1: You are creating a website for your college. 
             Create a class User with 2 properties, name & email. 
             It also has a method called viewData() that allows user to view website data.

Practise Q2: Create a new class called Admin which inherits from User. 
             Add a new method called editData to Admin that allows it to edit the website data.

*/
let Data = "Secret Data";
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Name : ", this.name);
        console.log("email: ",this.email);    
    }
}

//practise Q2...
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData()
    {
        Data = 'some new Secret Data';
    }
}

let user1 = new User("Nishant","nishant@gmail.com");
user1.viewData();
console.log(user1);

let dean = new User("dean1", "dean1@gmail.com");
dean.viewData();
console.log(dean);

let admin1 = new Admin("admin1","admin1@gmail.com");
console.log(admin1);
admin1.editData();
console.log(Data);


/*
Day 10 - Error Handling in JS

1. try-catch block:

--> try{
        ..normal code
    }
    catch(err){  // err -> error object
        ..handling error        
    }
*/

let a = 6;
let b =8;

console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);

try{
    console.log("a+c = ",a+c);
}
catch(err){
    console.log(err);
} // if we didn't handle this error then it only print till this error. 

console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);