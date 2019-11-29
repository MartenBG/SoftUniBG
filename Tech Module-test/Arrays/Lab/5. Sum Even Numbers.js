function solve(arr) {
    let sumIfEven = 0;
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);
        if (n % 2 === 0) {
            sumIfEven += n;
        }
    }
    console.log(sumIfEven);
}
solve(['2','4','6','8','10']);