function solve(arr) {
    num = Number(arr.pop());
    arr = arr.join().split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Number(arr[i]));
    }
    for (let j = 0; j < newArr.length; j++) {
        let output = '';
        for (let k = j + 1; k < newArr.length; k++) {
            if ((newArr[j] + newArr[k]) === num) {
                output = `${newArr[j]} ${newArr[k]}`;
                console.log(output);
            }
        }
    }
}
//solve(['1 7 6 2 19 23', '8']);
solve(['14 20 60 13 7 19 8', '27']);