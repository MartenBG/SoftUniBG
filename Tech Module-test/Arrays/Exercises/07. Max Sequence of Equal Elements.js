function solve(arr) {
    arr = (arr.join()).split(' ');
    let output = '';
    let lengthCounter = 0;
    let maxCounter = 0;
    let position = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            lengthCounter++;
            if (lengthCounter > maxCounter) {
                position = i - lengthCounter;
                maxCounter = lengthCounter;
            }
        } else {
            lengthCounter = 0;
        }
    }
    for (let j = position + 1; j <= position + maxCounter + 1; j++) {
        output += `${arr[j]} `;
        
    }
    console.log(output);
}
solve(['2 1 1 2 3 3 2 2 2 2 1']);