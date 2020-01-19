function solve(array) {

    let output = '';

    for (let i = 0; i < array.length; i += 2) {
        output += `${array[i]} `;
    }
    return output;
    
}

console.log(solve(['5', '10']));
