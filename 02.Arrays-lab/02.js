
function code(n, k) {
    let array = [1];


    for (let i = 1; i < n; i++) {
        let elementSum = 0; 
        
        for (let j = array.length; j >= array.length - k; j--) {
            if(array[j] != undefined){
                elementSum += array[j];
            }
        }
        array.push(elementSum);
    }

   return(array);

}
//let adapterFunction = ([n, k], code) => code(Number(n), Number(k)).join('\n')

//solve(6, 3);
code(8, 2);