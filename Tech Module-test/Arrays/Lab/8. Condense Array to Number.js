function solve(arr) {
    let condensedArr = [];

    while (arr.length > 1) {
        condensedArr = [];
        for (let i = 0; i < arr.length-1; i++) {
            condensedArr[i] = arr[i] + arr[i + 1];
        }
        arr = condensedArr;
    }
    
console.log(arr[0]);
}
solve([2, 10, 3]);