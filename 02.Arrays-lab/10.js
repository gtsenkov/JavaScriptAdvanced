function diagonalsSum(arr) {
    let sumMain = 0;
    let sumSecondary = 0;
    let result;

    for (let i = 0; i < arr.length; i++) {
        sumMain += arr[i][i];
    };

    result = sumMain + " ";
    
    for (let i = 0; i < arr.length; i++) {
        let index = arr.length - 1 - i;
        sumSecondary += arr[i][index];
    };

    result += sumSecondary + " ";

    return result;
}


console.log(diagonalsSum([[20, 40],
[10, 60]]
));

console.log(diagonalsSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));