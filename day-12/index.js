// Object Creation

let person = {
    name: 'akibul',
    age: 24,
}
console.log(person.age);

// Accessing Object Properties dynamically

let selection = 'name';
console.log(person[selection]);

// Adding new properties to the object

person.gender = 'male';
person.country = 'Qatar';
person['fav food'] = 'Grill Beef';

console.log(person);

let anyKey = 'gender';
console.log(person[anyKey]);


for (let key in person){
    console.log(`${key} of this guy is ${person[key]}`);
}

// now i am going to make dynamic object in my mind

let akibul = {};

let car = 'LAMBOGINI';
let howManyCar = 2;

akibul[car]= howManyCar;

console.log(akibul);

// now i am to creatre constructor function to make object

function Person (name, age, country, gender){
    this.name= name;
    this.age= age;
    this.land= country;
    this.gender= gender;
}

let firstPerson = new Person ('Sakibul', 24, 'Bangladesh', 'male');
console.log(firstPerson);

firstPerson.job = 'developer';
console.log(firstPerson);

//Destructuring Object
let mobile = {
    brand : 'samsung',
    model : 's22 ultra',
    price : 1200 + 'pound',
    year : 2022,
}
let {brand, model, price, year} = mobile;

console.log(brand);

//Destructuring with nested object

let player = {
    name : 'Anamul',
    age : 28,
    stats : {
        matches : 200,
        runs : 8000,
        wickets : 150,
    }
}

let {name, age, stats, stats: {matches, runs, wickets}} = player;

console.log(stats);

// Destructuring with function parameter

function bookInfo( {title, author, year, chapters, chapters: {chapter1, chapter2}}){

    console.log (title);
    console.log (author);
    console.log(year);
    console.log(chapters);
    console.log(chapter1);
    console.log(chapter2);

}

let book ={
    title: 'Javascript for absolute novice',
    author : 'Akibul Hasan',
    year : 2023,
    chapters : {
        chapter1 : 'Introduction',
        chapter2 : 'Basics'
    }
}

bookInfo(book);

// student object with avarage grade calculatiion with method

let stdName ='Nayeb';
let className = 'ten';
let bangla =75;
let english =70;
let math =85;



let student = {
    stdName : stdName,
    class : className,
    bangla: bangla,
    english : english,
    math: math,

    avgGrade : function (){
        let total = this.bangla + this.math + this.english;
        let avg = total/3;
        return avg;
    }
}

console.log(student.avgGrade());


// destructuring with function parameter

function playerInfo ({playerName, team, age, stats, stats:{matches, runs, wickets, avg}}){
    console.log(playerName);
    console.log(team);
    console.log(age);
    console.log(stats);
    console.log(matches);
    console.log(runs);
    console.log(wickets);
    console.log(avg);

}

let playerObj = playerInfo({
    playerName: 'Taskin',
    team: 'Qater',
    age: 27,
    stats: {
        matches:212,
        runs: 1400,
        wickets: 121,
        avg: 43.9
    }
});

// now play with object methods

let mobilePhone = {
    brand: 'apple',
    model: 'iphone 14 pro max',
    price: `1500 pound`,
    fullInfo: function (){
        return `this phone is ${this.brand} model = ${this.model} and price is ${this.price}`;
    }
}

console.log(Object.entries(mobilePhone));


console.log(this);



// object method 

let men = {
    mName : 'Akibul',
    age : 24,
    fullInfo : function (){
        console.log('My name is' + this.mName);
    }
}

let anotherMen = Object.create(men);
console.log(anotherMen.mName);
anotherMen.mName = 'Rafiq';
anotherMen.fullInfo();