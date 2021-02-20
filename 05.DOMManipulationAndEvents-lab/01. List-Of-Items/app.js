function addItem() { 

    // create new <li> element
    const liElement = document.createElement('li');

    // set text of new element to input value from selected input field and read input value 
    liElement.textContent = document.getElementById('newItemText').value;

    
    //select list from page
    // append new element to list
    document.getElementById('items').appendChild(liElement);

    //make add field empty
    document.getElementById('newItemText').value = '';
    
}