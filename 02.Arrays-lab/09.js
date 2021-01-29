function biggestElement(arr){
    let biggest = arr[0][0];

   for (let i = 0; i < arr.length; i++) {
       for (let index = 0; index < arr[i].length; index++) {
           if(biggest < arr[i][index]){
               biggest = arr[i][index];
           };
       };
   }

   return biggest;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));