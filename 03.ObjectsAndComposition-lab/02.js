function population(townsArray) {
    const towns = {};

    // AS ASSOCIATIVE ARRAY
    // for (let townsAsString of townsArray){
    //     //parse input strings
    //     let tokens = townsAsString.split(' <-> ');
    //     let name = tokens[0];
    //     let population = Number(tokens[1]);

    //     if(towns[name] == undefined){
    //         towns[name] = population;
    //     } else {
    //         towns[name] += population;
    //     }

    //iterate over input
    for (let townsAsString of townsArray) {
        //parse input strings
        let [name, population] = townsAsString.split(' <-> ');
        //.filter(x => x.length > 0); - if i want to remove empty spaces
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        } 
        
        towns[name] = population;
    }
    //store population in assoc array(object)

    //print result
    for (let [name, population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }

}

population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);