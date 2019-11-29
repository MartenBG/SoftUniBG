// function solve(numOne, numTwo, numThree) {
//     let result = '';
//     if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
//         result = 'Positive'
//     } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
//         result = 'Positive'
// }

function solve(firstNum, secondNum, thirdNum) {
    if (firstNum * secondNum * thirdNum >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

solve(5, 0, -10);