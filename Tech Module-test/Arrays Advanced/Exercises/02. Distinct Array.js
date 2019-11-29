function repeatRemoove(arr) {
    let remooved = [];
    for (let element of arr) {
        if (!remooved.includes(element)) {
            remooved.push(element);
        }
    }
    console.log(remooved.join(' '));
}
repeatRemoove([7, 8, 9, 7, 2, 3, 4, 1, 2]);