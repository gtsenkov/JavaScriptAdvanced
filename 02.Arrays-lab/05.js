function solve(array){
    let min = array[0];
    let min1 = array[0];
    
    // for (const num of array) {
    //     if(num < min ){
    //         min = num;
    //     }
    // }

    // for (const num of array) {
    //     if(num > min && num < min1 ){
    //         min1 = num;
    //     }
    // }

    // for (let num = 0; num < array.length; num++) {
    //     if(array[num] < min ){
    //         min1 = min;
    //         min = array[num];
    //     } else if(array[num] < min1 && array[num] != min){
    //         min1 = array[num]
    //     }
    // }

    //judge is looking for result from SORT
    array.sort(compareNumbers);

    min = array.shift();
    min1 = array.shift();

    function compareNumbers(a, b){
        return a - b;
    }

    console.log(min, min1);
    // lambda expression
    // array.sort((a, b) => a - b);

    //STRINGS EMBEDED SORTING 
    //let names = ['Peter', 'george', 'Maria', 'Dimitar'];
    // names.sort((a, b) => a.localeCompare(b));
    // console.log(names);

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);
solve([0]);