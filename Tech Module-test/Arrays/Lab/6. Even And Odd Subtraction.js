function solve(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if (n % 2 === 0) {
            even += n;
        } else {
            odd+=n;
        }
    }
    console.log(even - odd);
}
solve([1, 2, 3, 4, 5, 6]);