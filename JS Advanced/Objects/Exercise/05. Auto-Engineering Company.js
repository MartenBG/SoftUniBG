function solve(array) {


    let parsedData = array.reduce((acc, productLine) => {

        let [brand, model, count] = productLine.split('|').map(x => x.trim());

        if (acc[brand]) {

            if (acc[brand][0] === model) {
                acc[brand][1] += Number(count);

            } else {
                acc[brand][model] = Number(count);
            }
        } else {
            acc[brand] = [model, Number(count)];
        }

        return acc;

    }, {});
    console.log(parsedData);

    // Object.keys(parsedData).map(x => {

    //     console.log(x);
    //     let output = parsedData[x].map;

    // });
}

solve([
    'Mercedes-Benz | 50PS | 123',
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
]);