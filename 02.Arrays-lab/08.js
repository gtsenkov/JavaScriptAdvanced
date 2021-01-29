function process(arr){
    let newArr = [];

    arr.forEach((e, i) => {
        if(i%2 != 0){
            newArr.unshift(e * 2)
        }
    });

    return newArr;
    //console.log(newArr);
}

process([10, 15, 20, 25]);