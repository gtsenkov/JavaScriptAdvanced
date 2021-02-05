function solve(arr) {
    
    let rowSums = arr.map((el)=>reduce((a,b)=>a+b),0);
    // for (let i = 0; i < arr.length; i++) {
        //     let row = arr[i];
        //     let sum = row.reduce((result, currentValue) => (result + currentValue), 0);
        //     rowSums.push(sum);
        // }
        
    let colSums = arr.map((r,i)=> arr[0].map((col,y)=>arr[y][i])).map((el)=>reduce((a,b)=>a+b),0);
    // for (let i = 0; i < arr.length; i++) {
    //     let newRow = [];
    //     for (let j = 0; j < arr.length; j++) {
    //         let index = arr.length - 1 - j;
    //         newRow.push(arr[index][i])
    //     }

    //     let sum = newRow.reduce((result, currentValue) => (result + currentValue), 0);
    //     colSums.push(sum);
    // }

    return rowSums.concat(colSums).every((el, i, arr)=> el === arr[0]);
}

console.log(solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));