function solve(n) {

    let compare = String(n);
    let sum = compare.split('').reduce((a, b) => Number(a) + Number(b));

    for (let i = 1; i <= compare.length - 1; i++) {
        var isTheSame = true;

        if (compare[0] !== compare[i]) {

            isTheSame = false;
            break;
        }
    }
    if (isTheSame) {
        console.log('true');
        console.log(sum);
    } else {
        console.log('false');
        console.log(sum);
    }

}

solve(2222);