const solve = (arr, step) => {

    function predicate(el, i) {
        return i % step === 0;
    }
    let result = arr.filter(predicate);
    return result;
    // let result = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % step === 0){
    //         result.push(arr[i]);
    //     }
    // }

    // return result;

    // const solve = (arr, step) => arr.filter((_, i) => i % step === 0);
    // shortest
}

console.log(solve(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
))