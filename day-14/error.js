console.log("This is a sample error handling code.");

try{
 
    let result = someUndefinedFunction();
    console.log(result);
}
catch(error){
    console.error("An error occurred :", error.message);
}

//basic try-catch

// console.log(a);

try{
    console.log(b);
}
catch(err){
    console.log(err.message);
}

try{
    console.log('start');
    notdefinedFunction();
    console.log('end');
}
catch(e){
    console.log(e.message);
}


//creating function constructor here to use

function Student(name, age, rollNo){
    this.name = name,
    this.age = age,
    this.rollNo = rollNo
}


let student1 = new Student('John', 20, 101);
console.log(student1);


//catch type error

// let x = null;
// x.toUpperCase();

try{
    console.log(player);
}
catch(err){
    console.log(err.name);
    console.log(err.stack);
    console.log(err.message);
}

// custom error creation by myself

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try{
    divide(10,0);
}
catch(err){
    console.log(err.message);
    console.log(err.name);
}

