function solve(array) {

    array.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(name => {
        console.log(name);

    });

}


//solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
solve(['test', 'Deny', 'omen', 'Default']);