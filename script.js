let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');

//Form Submit Event 
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

//Filter event 
filter.addEventListener('keyup', filterItems)



//addItem
function addItem(e){
    e.preventDefault();

//Get Input Value

    //My trial 
        // let newItem = document.querySelector('#submit');
        // let newValue = document.querySelector('#form');

    //Actual 

        //the text input id is taken in order to get whatever is written in the text area. 
let newItem = document.getElementById('item').value;

//Create new li element

        //Use the createElement method to create a new li and add it alongside the input text (newItem)

let li = document.createElement('li');

//Add class 
        //add class so the new li element will have the same style as the others
li.className = 'list-group-item';


//Add textnode with input value 
        //this appends the text that comes from the input to the li, so that the li comes with text in it. appendChild shows that the text is a child to the li element.
li.appendChild(document.createTextNode(newItem));

//create delete button
        //this cretes a delete button for the added li(newItem). 
let deleteButton = document.createElement('button')

        //just like we did when we created the newItem(li), we need to add the classes that the other buttons already in html file have, so the new button will look like the rest

deleteButton.className = 'btn btn-danger delete'
        //this add the text for the button to the button. 
deleteButton.appendChild(document.createTextNode('x'));

//append button to li
        //read text input explanation
li.appendChild(deleteButton);

// append li to list
        //this appends the li (which now includes the text input) to the ul. the ul is a child of the li, so the appendChild method will be used.
itemList.appendChild(li);


}

//Remove item
        //The if statement checks if the event target has the class 'delete', before it fires off the assigned program.
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Do you want to delete this item?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }

        
    }

}

//filter Items
function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
   // Get lis
        //this can be used - in your thought process - for the 'delete all' function you see in some applications
    let items = itemList.getElementsByTagName('li');
    
//Convert to an array 
        //array method from the collection (items), forEach (to loop through them), function item (identifier) variable itemName and the values (will give all item names in an array.)
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    
        //Compare the itemName to the search box text. tolowercase because filter (all searches in the box) comes in lowercase, so make the items in the same case to match them. If it's not equal to -1, then it's a match. Show if, do not show if not. 

    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';

    } else {
        item.style.display = 'none';
        console.log('No results found')
    }
});
           

}