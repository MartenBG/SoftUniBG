function solve(arr) {
    let newArr = [];
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        sumOriginalArr += n;
        if (n % 2 === 0) {
            newArr[i] = n + i;
            sumModifiedArr += n + i;
        } else {
            newArr[i] = n - i;
            sumModifiedArr += n - i;
        }
    }
    console.log(newArr);
    console.log(`${sumOriginalArr}\n${sumModifiedArr}`);
}
solve([5, 15, 23, 56, 35]);
