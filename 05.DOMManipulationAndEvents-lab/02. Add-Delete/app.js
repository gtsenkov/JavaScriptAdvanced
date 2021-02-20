//example for global deletion option over the parent intead to adding even listener to every added element
// document.getElementById('items').addEventListener('click', (ev) => {
//     if(ev.target.tagName === 'A') {
//         ev.target.parentNode.remove();
//     }
// })

function addItem() { 

    const input = document.getElementById('newItemText');
    // create new <li> element
    // set text of new element to input value from selected input field and read input value 
    const liElement = createElement('li', input.value);

    //add delete button
    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    });
    liElement.appendChild(deleteBtn);
 
    //select list from page
    // append new element to list
    document.getElementById('items').appendChild(liElement);

    //make add field empty
    input.value = '';

    function createElement(type, content){
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
    
}