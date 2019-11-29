function solve(n) {

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            for (let j = 0; j < n; j++) {
                let output = String.fromCharCode(97+i) + String.fromCharCode(97+k) + String.fromCharCode(97+j);
                console.log(output);
            }
        }
    }
}
solve(3);