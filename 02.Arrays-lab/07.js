function pieceOfPie(arr, startString, endString){

    const startIndex = arr.indexOf(startString);
    const endIndex = arr.indexOf(endString);

    return arr.slice(startIndex, endIndex + 1);
    //returned new reference - means original is not affected compared 
    //to splice method where original arr is affected

    // if(endIndex == -1){
    //     return newArr = arr.splice(startIndex);

    // }
    // return newArr = arr.splice(startIndex, endIndex);

}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

// console.log(pieceOfPie(['Apple Crisp',
// 'Mississippi Mud Pie',
// 'Pot Pie',
// 'Steak and Cheese Pie',
// 'Butter Chicken Pie',
// 'Smoked Fish Pie'],
// 'Pot Pie',
// 'Smoked Fish Pie'
// ));