function solve(array){
    let result = [];

    for (let index = 0; index < array.length; index+=2) {
        result[result.length] = array[index];
        
    }

    return result.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));