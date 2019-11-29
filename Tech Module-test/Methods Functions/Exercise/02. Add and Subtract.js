function solve(numOne, numTwo, numThree) {
    // numOne = Number(numOne);
    // numTwo = Number(numTwo);
    // numThree = Number(numThree);
    
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (sumOfTwo, numThree) => sumOfTwo - numThree;
    let sumOfTwo = add(numOne, numTwo);
    let subtractOfTwo = subtract(sumOfTwo, numThree);
    console.log(subtractOfTwo);
}
solve(23, 6, 10);