function deleteByEmail() {
    //read input field value
    const email = document.querySelector('input[name="email"]').value;
    const resultElement = document.getElementById('result');
    
    // select all table cells from the last column 
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let deleted = false;
    // iterate over cells
    for (let row of rows) {
        //if tet matches input value -> delete row
        if(row.children[1].textContent == email){
            // -- remove from parentNode
            // row.parentNode.removeChild(row);
            row.remove();
            deleted = true;
            resultElement.textContent = 'Deleted.'
        }
    }

    // const matches = rows.filter(r => r.children[1].textContent == email);
    // if(matches.length > 0){
    //     matches.forEach(r => r.remove());
    //     resultElement.textContent = 'Deleted';
    // } else {
    //     resultElement.textContent = 'Not found.';
    // }

   if(deleted != true){
       //display result message
       resultElement.textContent = 'Not found.'
   }
}