function addToWagonsTrain(arr) {
    let trainWagons = arr
        .shift()
        .split(' ')
        .map(Number);
    let maxWagonCapacity = Number(arr.shift());

    for (let command of arr) {
        let currentCommand = command.split(' ');
        if (currentCommand[0] === 'Add') {
            trainWagons.push(Number(currentCommand[1]));
        } else {
            currentCommand = currentCommand.map(Number);
            
            for (let i = 0; i < trainWagons.length; i++) {
                if (currentCommand[0] + trainWagons[i] <= maxWagonCapacity) {
                    trainWagons[i] += currentCommand[0];
                    break;
                }
            }
        }
    }

    console.log(trainWagons.join(' '));
}

addToWagonsTrain(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);