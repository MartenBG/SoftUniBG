function solve(ar1, ar2, ar3) {
    let result = 0;
    if (ar1 > ar2 && ar1 > ar3) {
        result = ar1;
    } else if (ar2 > ar1 && ar2 > ar3) {
        result = ar2;
    } else {
        result = ar3;
    }
    console.log(`The largest number is ${result}.`);
}

solve(-3, 16, -22);
