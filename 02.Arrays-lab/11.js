function equalNeigbors(arr){

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < arr[i].length; index++) {
            if(arr.length - 1 > i && arr[i + 1][index] == arr[i][index]){
                result++;
            };
            if(arr[i][index + 1] == arr[i][index]){
                result++;
            };
        };
    }

    return result;
}

console.log(equalNeigbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(equalNeigbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));

console.log(equalNeigbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]
));
