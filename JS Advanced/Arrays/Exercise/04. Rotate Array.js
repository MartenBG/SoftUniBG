function solve(array) {
    arr = array.slice(0);
    let rotation = Number(arr.pop()) % (arr.length);
    for (let i = 0; i < rotation; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }

    console.log(arr.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
);