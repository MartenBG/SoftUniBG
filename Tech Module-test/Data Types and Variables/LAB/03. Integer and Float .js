function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    sum.toString().includes('9');
    sum % 1 === 0 ? console.log(`${sum} - Integer`) : console.log(`${sum} - Float`);
}
solve(9, 100, 1);