function solve(arr) {

    let count = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        for (let k = 0; k < arr[0].length; k++) {

            let a = arr[i][k];
            let b = arr[i + 1][k];

            if (a === b) {
                count++;
            }

        }        

    }

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (arr[i][j] === arr[i][j + 1]) {
                count++;
            }
        }        

    }  

    return count;

}

console.log(
    solve
        (
            [['2', '2', '5', '7', '4'],
            ['4', '0', '5', '3', '4'],
            ['2', '5', '5', '4', '2']]
        ));
