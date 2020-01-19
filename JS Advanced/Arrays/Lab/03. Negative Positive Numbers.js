function solve(array) {

    let newArray = [];

    array.forEach(element => {

        if (element >= 0) {
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }

    });
    newArray.forEach(el => {
        console.log(el);
    });
}

solve([7, -2, 8, 9]);
