console.log("this is day");

//here is my task 1

let myName ="Hasan";
let myAge= 24;
let isStudent= "true";
let favouriteLanguage="javascript";

console.log("my name is "+ myName+ ".");
console.log("my age is "+ myAge);
console.log("I am a student: "+ isStudent);
console.log("mu favourite language name is "+ favouriteLanguage);

let country= "Bangladesh";
console.log("I live in "+ country);
country="Turkey";
console.log("I love "+ country);

const birthYear= 1999;
console.log("my birth year is "+ birthYear);



// here is object

let student = {
    name: "hasan",
    age: 24,
    isStudent: true,
}
console.log(student);
let newStudent= student;
newStudent.name= "akibul";
console.log(student);

// here is array

let fruits=["mango", "banana", "apple"];
console.log(fruits);
let newFruits = fruits;
newFruits.push("orange");
console.log(fruits);

//here I am creating a object.

let dettol= {
    name: "Quality Dettol",
    type: "Antiseptic Liquid",
    volume: "250ml",
    price: 120,
    allergy : function(){
        console.log("if you use too much this"+ this.name + " then " + this.type
+ " may cause allergy.");  }
}

dettol.allergy();