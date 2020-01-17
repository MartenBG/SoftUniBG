function solve(arr) {

    let calorie = {};

    for (let i = 0; i <= arr.length - 1; i+=2) {
        calorie[arr[i]] = Number(arr[i + 1]);
    }
    return calorie;

}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));