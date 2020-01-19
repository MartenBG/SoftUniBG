function solve(array) {

    let firstEl = +array[0];
    let lastEl = +array.pop();

    return firstEl + lastEl;

}

console.log(solve(['20', '30', '40']));
