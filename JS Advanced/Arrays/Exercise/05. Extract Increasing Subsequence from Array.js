function solve(array) {

    let min = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= min) {

            console.log(array[i]);
            min= array[i];

        }

    }

}

solve([20, 3, 2, 15, 6, 1]);