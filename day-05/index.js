console.log('Day 5: Iteration');

// for loop

// A for loop is used when the number of iterations is known beforehand.

// for(intiakization; condition; update){
//     //code to be executed
// }


for(let count=1; count <=5; count++){
    console.log(`count is ${count}`);
}


let sum=0;
for(let i =1; i<=100; i++){
    if(i%2===0){
        sum+=i;
    }
}
console.log(`Sum of first 100 even numbers is ${sum}`);

let language= 'javascript';

for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));
}

// nested loop

for (let a=1; a=3; a++){
    for(let b=1; b<=3; b++){
        console.log(`row is ${a} and column is ${b}`);
    }
}

// break and continue statement
for(let i=1; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}

for (let i=1; i<=10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}