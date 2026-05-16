const pElem = document.createElement('p');
pElem.textContent = 'This is a paragraph created using javascript';
document.body.append(pElem);

pElem.style.border='2px solid blue';

const heading = document.createElement('h1');
heading.textContent = ' This is the heading of the DOM manipulation';
document.body.prepend(heading);

// create element //
const form = document.createElement('form');
const input = document.createElement('input'); 
input.type = 'text';
input.placeholder = 'Enter your name';
form.append(input);
const submitBtn = document.createElement('button');
submitBtn.textContent = 'Submit';
form.append(submitBtn);
document.body.append(form);


const uname = document.createElement('h2');
uname.textContent ='Hello, this is akib';
document.body.insertBefore(uname, form);

// working with lists //

let itemList = document.querySelector('.itemList');


let liA = document.createElement('li');
liA.textContent ='A';
itemList.append(liA);


// I am going to add more list at once //
let items =['a','b','c','d','e','f','g'];
let fragment= document.createDocumentFragment();

for (let i of items){
    let li = document.createElement('li');
    li.textContent =i;
    fragment.append(li);
}

itemList.append(fragment);

// working with attributes //

let img = document.querySelector('img');
img.setAttribute('title', 'cat');
console.log(img.getAttribute('title'));

img.removeAttribute('title');
console.log(img.hasAttribute('title'));

// inserting Before an element //

let liZ = document.createElement('li');
liZ.textContent ='Z';
itemList.insertBefore(liZ, itemList.children[2]);

// inserting after an element using insertBefore//

let hasan = document.createElement('li');
hasan.textContent = 'Hasan';
itemList.insertBefore(hasan, liZ.nextElementSibling);

// removing an element //

itemList.removeChild(itemList.children[4]);

// replacing an element //

let bayazid = document.createElement('li');
bayazid.textContent ='Bayazid';
itemList.replaceChild(bayazid, itemList.lastElementChild);

let akibul =document.createElement('li');
akibul.textContent = 'Akibul';
itemList.firstElementChild.replaceWith(akibul);

// innerHTML vs textContent//


let div = document.createElement('div');
div.innerHTML = `<h3>Benim Adim Akibul Hasan</h3>
<p>This is Akibul Hasan always care about someone.</p> 
`
document.body.append(div);

// now learning about Dom traversing //

