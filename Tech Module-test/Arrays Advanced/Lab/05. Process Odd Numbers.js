function solve(arr) {
    result = [];
    for (let num in arr) {
        if (num % 2 === 1) {
            result.push(arr[num] * 2);
        }
    }

    console.log(result.reverse().join(' '));
}

solve([10, 15, 20, 25]);