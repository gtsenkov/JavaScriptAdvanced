function focused() {
    //select all input fields
    //add listener for focus event
    //add listener for blur event

    document.querySelectorAll('input').forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });

    //THIS IS WHAT JUDGE CAN ITTERATE
    // Array.from(document.querySelectorAll('input')).forEach(i => {
    //     i.addEventListener('focus', onFocus);
    //     i.addEventListener('blur', onBlur);
    // });

    //SELECTING BY TAG NAME DOES NOT GIVE FOREACH THEN FOR CYCLE IS NEEDED
    // const inputs = document.getElementsByTagName('input');

    // for (let i = 0; i < inputs.length; i++) {
    //         inputs[i].addEventListener('focus', onFocus);
    //         inputs[i].addEventListener('blur', onBlur);
    //     }

    
        

    //onFocus -> select input parent -> apply class "focused"
    function onFocus(ev){
           ev.target.parentNode.className = 'focus';
    }

    //onBlur -> select input parent - remove class "focused"
    function onBlur(ev){
        ev.target.parentNode.className = '';
    }

}