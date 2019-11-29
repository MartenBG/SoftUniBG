function solve(arr, n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr.shift([i]);
        arr.push(newArr[i]);
    }
    console.log(arr.join(' '));
}
solve([51, 47, 32, 61, 21], 2);