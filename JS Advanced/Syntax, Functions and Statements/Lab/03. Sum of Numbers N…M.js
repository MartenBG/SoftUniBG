function solve(str1, str2) {
    n1 = Number(str1);
    n2 = Number(str2);
    let sum = 0;
    for (let index = n1; index <= n2; index++) {
        sum += index;
    }
    return sum;

}

console.log(solve('-8', '20'));
