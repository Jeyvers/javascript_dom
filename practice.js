
// console.dir(document);
//shows you all the things in the document (document objects), as shown below
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
 // document.title = "Just so you know";
 // shows the title can be changed from the scirpt
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)

//SELECTORS
// GETELEMENTBYID //

// console.log(document.getElementById('form'));
/*
textContent, innerText, innerHTML,borderBottom, etc. 
*/

//How to change the CSS styling of HTML elements.
// headerTitle.style.borderBottom = 'solid 3px #000';


// GETELEMENTSBYCLASSNAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1])

// var itemOne = items[1];

// itemOne.textContent = 'Hello 2';
// itemOne.style.fontWeight = 'bold';
// itemOne.style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'black'
//     items[i].style.color = 'white'
// }



//GETELEMENTSBYTAGNAME //

// var listItems = document.getElementsByTagName('li');
// console.log(listItems)
// console.log(listItems[1])

// var itemOne = listItems[1];

// itemOne.textContent = 'Hello 2';
// itemOne.style.fontWeight = 'bold';
// itemOne.style.backgroundColor = 'yellow';

// for (var i = 0; i < listItems.length; i++) {
//     listItems[i].style.backgroundColor = 'black';
//     listItems[i].style.color = 'white';
// }


// QUERYSELECTOR //
// Grabs just one element or the first one in case of many other objects

// var header = document.querySelector('#header-title');
// header.style.borderBottom = 'solid 4px white';

// var input = document.querySelector('input');
// input.value = 'Hello World';


// var submit = document.querySelector('input[type = "submit"]');


// submit.value = 'SEND';
// submit.style.backgroundColor = 'black';

// QUERYSELECTOR //
// grabs more than one 

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i = 0; i < odd.length ; i++  ) {
//     odd[i].style.backgroundColor = 'yellow';
// }



// TRAVERSING THE DOM //
// var itemList = document.querySelector('#items');

// //parentNode 
// console.log(itemList.parentNode);

// parentElement
var itemList = document.querySelector('#items');

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc'
// console.log(itemList.parentElement.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes)

// //children is better
// console.log(itemList.children)

// //firstChild, lastChild
// console.log(itemList.firstChild);

// //firstElementChild, lastElementChild
// console.log(itemList.firstElementChild);

// // nextSibling, previousSibling
// console.log(itemList.nextSibling);
// itemList.nextSibling.style.color = 'green'

// createElement
// create a div 
// var newDiv = document.createElement('div');



// Add Class
// newDiv.className = ' Hello';

// Add Id
// newDiv.id = 'HelloOne';

//Add attribute
// newDiv.setAttribute('title', 'Hello Div');

//Crerate text node
// var newDivText = document.createTextNode('Hello World');

//Add text to div
// newDiv.appendChild(newDivText);

// Inserting into the dom
// var divContainer = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// divContainer.insertBefore(newDiv, h1);
// console.log(newDiv);


//HOW TO ADD EVENT LISTENERS
// var button = document.querySelector('#button').addEventListener('click', buttonClick);

//can put the buttonClick in the function area. 

// function buttonClick (){
// console.log('Button Clicked')
// document.getElementById('header-title').textContent= 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// }

var button = document.getElementById('button').addEventListener('mouseenter', runEvent);
addEventListener('mouseout', runEvent);


function runEvent (e){
console.log('Event Type: ' + e.type);
}


//check out the many event listeners on the JavaScript docs. 
// eg change events, input, blur, focus, keydown, keyup, keypress, etc.
