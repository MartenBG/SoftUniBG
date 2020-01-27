function solve(arr) {

    let parsedData = {};
    let juice = {};

    for (let i = 0; i < arr.length; i++) {

        let tempParsedJuice = arr[i].split(' => ');
        if (parsedData[tempParsedJuice[0]]) {
            parsedData[tempParsedJuice[0]] = parsedData[tempParsedJuice[0]] + Number(tempParsedJuice[1]);
        } else {
            parsedData[tempParsedJuice[0]] = Number(tempParsedJuice[1]);
        }

        let bottledQ = Math.floor(parsedData[tempParsedJuice[0] / 1000]);

        if (bottledQ > 0) {
            juice[tempParsedJuice[0]] = bottledQ;
        }
    }

    let finalOutput = Object.entries(juice);

    return finalOutput;
    





}


console.log(solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]));