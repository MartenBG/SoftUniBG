function findPerfectNumber(num) {
    num = Number(num);
    output = [];
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            output.push(i);
        }
    }

    for (let element of output) {
        sum += element;
    }

    if (sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It’s not so perfect.')
    }
}
findPerfectNumber(8);