function solve(array) {

    let output = [];

    for (let i = 1; i < array.length; i += 2) {

        let current = array[i] * 2;
        output.push(current);

    }

    return output.reverse().join(' ');

}

console.log(solve([3, 0, 10, 4, 7, 3]));