function solve(array){

    let sum = 0;
    let divisionSum = 0;
    let concat = '';

    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        divisionSum += 1/array[index];
        concat += array[index];
    }


    console.log(sum);
    console.log(divisionSum.toFixed(4));
    console.log(concat);
}

solve([1, 2, 3]);