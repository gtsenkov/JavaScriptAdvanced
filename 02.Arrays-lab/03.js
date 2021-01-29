function solve(strings){
    let first = Number(strings.shift());
    let last = Number(strings.pop());

    return first + last;

}

solve(['20', '30', '40']);
solve(['5', '10']);