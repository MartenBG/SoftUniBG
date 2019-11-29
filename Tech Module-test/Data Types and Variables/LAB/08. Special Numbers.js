function solve(num) {
    for (let i = 1; i <= num; i++) {
        let first =parseInt(i / 10);
        let second = i % 10;
        if ((first + second === 5) || (first + second === 7) || (first + second === 11)) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
solve(15);