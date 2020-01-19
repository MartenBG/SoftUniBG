function solve(arr) {

    let tempArray = [];

    arr.forEach(element => {
        let current = element.sort((a, b) => b - a).slice(0, 1);
        tempArray.push(current);
    });

    tempArray.sort((a, b) => b - a);
    console.log(tempArray[0][0]);
}

solve([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);