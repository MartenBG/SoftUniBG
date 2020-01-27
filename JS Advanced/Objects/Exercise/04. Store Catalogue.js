function solve(array) {


    let parsedData = array.reduce((acc, productLine) => {

        let [name, price] = productLine.split(':').map(x => x.trim());

        if (acc[name[0]]) {
            acc[name[0]] = [...acc[name[0]], productLine];
        } else {
            acc[name[0]] = [productLine];
        }

        return acc;
    }, {});


    Object.keys(parsedData).sort().map(x => {

        console.log(x);
        parsedData[x].sort().map(product => {
            console.log(`${product.split(' : ').join(': ')}`);
        });


});

}


solve([
    'Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);