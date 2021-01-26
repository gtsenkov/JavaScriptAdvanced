function solve(str1, str2, str3){
    const length1 = str1.length;
    const length2 = str2.length;
    const length3 = str3.length;

    const sum = length1 + length2 + length3;

    console.log(sum);
    console.log(Math.floor(sum/3));
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');