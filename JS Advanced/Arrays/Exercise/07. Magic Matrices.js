function solve(array) {

    let isEqual = true;
    let currentSum = 0;

    for (let i = 0; i < array.length; i++) {
        let temp = array[i].reduce((a, b) => a + b);

        if (currentSum === 0) {
            currentSum = temp;
        } else if (currentSum !== temp) {
            isEqual = false;
            break;
        }

    }
    
    for (let i = 0; i < array.length; i++) {
        const tmp = [];
        for (let k = 0; k < array.length; k++) {

            tmp.push(array[i][k]);
        }
        let temp = tmp.reduce((a, b) => a + b);
        if (currentSum !== temp) {
            isEqual = false;
            break;
        }

    }

    console.log(isEqual);

}

solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);