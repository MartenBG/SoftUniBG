function solve(array) {


    let data = [
    ];

    for (let i = 0; i < array.length; i++) {
        const currentData = array[i].split(',');

        let temp = JSON.parse(currentData);

        console.log(temp);



    }
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);