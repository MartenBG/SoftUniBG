function solve(firstNum, secondNum, operator) {
    switch (operator) {
        case 'multiply': let multiply = (firstNum, secondNum) => firstNum * secondNum;
            console.log(multiply(firstNum, secondNum));
            break;
        case 'divide': let divide = (firstNum, secondNum) => firstNum / secondNum;
            console.log(divide(firstNum, secondNum));
            break;
        case 'add': let add = (firstNum, secondNum) => firstNum + secondNum;
            console.log(add(firstNum, secondNum));
            break;
        case 'subtract': let subtract = (firstNum, secondNum) => firstNum - secondNum;
            console.log(subtract(firstNum, secondNum));
            break;
    }
}