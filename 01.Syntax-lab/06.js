function solve(n, m){
    const num1 = Number(n);
    const num2 = Number(m);

    let result = 0;

    for (let index = num1; index <= num2; index++) {
        result += index;    
    }

    console.log(result);

}

solve('1', '5');
solve('-8', '20');