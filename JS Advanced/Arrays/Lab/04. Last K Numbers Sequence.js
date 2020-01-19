function solve(n, k) {

    let array = [];

    for (let i = 0; i < n; i++) {

        if (i === 0) {
            array.push(1);
            continue;
        }
        if (i === 1) {
            array.push(1);
            continue;
        }
        if (array.length !== 1 && array.length < k) {
            let current = array.reduce((a, b) => a + b);
            array.push(current);
            continue;
        }
        if (array.length === k) {
            let current = array.reduce((a, b) => a + b);
            array.push(current);
            continue;
        }
        if (array.length > k) {
            let currentArray = array.slice(array.length - k);
            let current = currentArray.reduce((a, b) => a + b);
            array.push(current);
        }

    }

    console.log(array.join(' '));

}

solve(6, 3);