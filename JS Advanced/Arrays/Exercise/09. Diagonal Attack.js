function solve(arr) {

    let matrix = [];
    let main = 0;
    let second = 0;
    let mod = [];
    let isTrue;

    for (let i = 0; i < arr.length; i++) {

        matrix[i] = [];
        let row = arr[i].split(' ');

        for (let j = 0; j < row.length; j++) {

            matrix[i][j] = Number(row[j]);
        }

    }
    
    equalDiagonals(matrix);

    if (isTrue) {

        for (let i = 0; i < matrix.length; i++) {

            mod[i] = [];

            for (let j = 0; j < matrix.length; j++) {

                if (i === j || j === (matrix.length - 1 - i)) {
                    mod[i][j] = matrix[i][j];
                } else {
                    mod[i][j] = main;
                }

            }

        }

        print(mod);

    } else {

        print(matrix);
    }
    function equalDiagonals(ar) {

        for (let i = 0; i < ar.length; i++) {
            main += ar[i][i];
            second += ar[i][ar.length - 1 - i];
        }

        if (main === second) {
            isTrue = true;
        } else {
            isTrue = false;
        }
        return isTrue;
    }

    function print(input) {

        input.forEach(element => {
            return console.log(element.join(' '));
        });

    }

}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);