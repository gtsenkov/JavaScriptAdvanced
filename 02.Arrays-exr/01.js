const solve = (arr, delimiter) => {

    let result = '';

    return arr.join(delimiter);

    // for(let i = 0; i < arr.length; i++){
    //     result += i == arr.length - 1 ? arr[i] : arr[i] + delimiter;
    // }

    // return result;
}

// (arr, delimiter) => arr.join(delimiter); 
// shortest way

console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
))