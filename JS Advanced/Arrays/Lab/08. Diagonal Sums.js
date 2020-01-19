function solve(arr) {

    let main = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
        main += arr[i][i];
    }

    for (let i = 0; i < arr.length; i++) {
        second += arr[i][arr.length - 1 - i];

    }

    return `${main} ${second}`;

}

console.log(solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));
