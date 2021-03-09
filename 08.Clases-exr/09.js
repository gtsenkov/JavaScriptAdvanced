function solve(arr) {
    let result = arr
        .map((line) => line.split(' | '))
        .reduce((storage, cars) => {
            let [brand, model, quantity] = cars;
            if (!storage[brand]) {
                storage[brand] = {};
            }
            if (!storage[brand][model]) {
                storage[brand][model] = 0;
            }

            storage[brand][model] += Number(quantity);
            return storage;
        }, {})

    let stringResult = [];
    for (const [key, value] of Object.entries(result)) {
        let result = `${key}\n`;
        let model = value;
        for (const [brand, quantity] of Object.entries(model)) {
            result += `###${brand} -> ${quantity}\n`
        }
        stringResult.push(result.trim());
    }

    return stringResult.join('\n');
}

console.log(solve(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10']
));