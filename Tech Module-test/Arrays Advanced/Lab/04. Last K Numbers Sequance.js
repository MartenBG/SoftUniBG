function solve(n, k) {
    let result = [1];
    for (i = 1; i < n; i++) {
        let start = Math.max(0, i - k);
        let sum = 0;
        let threeElemnts = result.slice(start);
        for (let number of threeElemnts) {
            sum += number;
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}

solve(6, 3);