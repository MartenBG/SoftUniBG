function solve(n) {

    let compare = n.toString().split('');
   // console.log(compare);
    
    let sum = compare.reduce((a, b) => Number(a) + Number(b));

    for (let i = 0; i < compare.length; i++) {
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