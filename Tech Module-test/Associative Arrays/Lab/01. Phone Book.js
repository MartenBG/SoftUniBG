function solve(arr) {
    let phoneBook = [];
    for (let input of arr) {
        let token = input.split(" ");
        let name = token[0];
        let number = token[1];
        phoneBook[name] = number;
    }

    for (let element in phoneBook) {
        console.log(`${element} -> ${phoneBook[element]}`)
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])