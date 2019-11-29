function bombing(arr, bombPower) {
    let bomb = bombPower[0];
    let power = bombPower[1];
    let sum = 0;

    while (arr.includes(bomb)) {
        for (let element of arr) {
            if (element === bomb) {
                arr.splice(arr.indexOf(element) - power, power * 2 + 1);
            }
        }
    }

    for (let element of arr) {
        sum += element;
    }

    console.log(sum);
}

bombing([ 4, 2, 2, 2, 9], [4, 2]);