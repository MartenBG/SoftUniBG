function sorting(arr) {
    let sortedArray = [];
    arr = arr.sort((a, b) => b - a);

    while (arr.length > 0) {
        sortedArray.push(arr.shift());
        sortedArray.push(arr.pop());
    }

    console.log(sortedArray.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);