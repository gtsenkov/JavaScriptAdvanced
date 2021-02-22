function validate() {
    //select input field
    //add change event listener
    document.getElementById('email').addEventListener('change', onChange);
    
    //onChange -> validate input
    function onChange(ev){
        const email = ev.target.value;
        if(/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)){
            //if invalid -> add class error
            ev.target.className = '';

        } else {
            // elase -> remove class error
            ev.target.className = 'error';
        }
    }
}