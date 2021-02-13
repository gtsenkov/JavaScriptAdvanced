function add(arr, type){
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }

    return arr.sort(map[type]);
}

console.log(add([14, 7, 17, 6, 8], 'asc'));