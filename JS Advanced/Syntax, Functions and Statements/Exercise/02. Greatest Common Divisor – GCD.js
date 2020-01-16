function solve(n1, n2) {

    let bigger;
    let commonDivisor;

    if (n1 >= n2) {
        bigger = n1;
    } else {
        bigger = n2;
    }

    for (let i = 1; i <= bigger; i++) {
        if ((n1 % i === 0) && (n2 % i === 0)) {
            commonDivisor = i;
        }

    }
    console.log(commonDivisor);    

}

solve(2154, 458);