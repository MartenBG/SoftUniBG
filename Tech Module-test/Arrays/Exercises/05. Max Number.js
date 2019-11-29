function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let isBiger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (currentElement <= arr[j]) {
                isBiger = false;
            }
        }
        if (isBiger) {
            newArr.push(currentElement);
        }
    }
    console.log(newArr.join(' '));
}
solve([14, 24, 3, 19, 15]);