function solve(arr) {

    arr = arr.sort((a,b) => a-b).slice(0, 2).join(' ');
    return arr;
}

console.log(solve([3, 0, 10, 4, 7, 3]));
