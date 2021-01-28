function solve(number){
    const string = number.toString();
    let isSame = true;
    let sum = 0;

    for(let i = 0; i<string.length - 1; i++) {
        let current = Number(string[i]);
        if(string[i] !== string[i+1]){
            isSame = false;
        }

        sum = sum + current;

    }
    
        sum += Number(string[string.length -1]);


    return `${isSame}\n${sum}`;
}

console.log(solve(2222222));
console.log(solve(1234));