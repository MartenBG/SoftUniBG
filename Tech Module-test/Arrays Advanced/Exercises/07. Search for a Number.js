function solve(arr, commands) {
    let modifyArray = [];
    let take = commands[0];
    let remove = commands[1];
    let search = commands[2];
    let countFoundedInt = 0
    for (let i = 0; i < take; i++) {
        modifyArray.push(arr[i]);
    }

    modifyArray = modifyArray.slice(remove);
    for (let token of modifyArray) {
        if (token === search) {
            countFoundedInt++;
        }
    }

    console.log(`Number ${search} occurs ${countFoundedInt} time.`);
}

solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);