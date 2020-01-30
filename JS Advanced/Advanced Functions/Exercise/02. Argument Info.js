function solve(...input) {

    let count = {};

    for (const any of input) {

        let type = typeof any;

        console.log(`${type}: ${any}`);

        if (!count[type]) {
            count[type] = 0;
        }
        count[type]++;
    }

    Object.entries(count).sort((a, b) => b[1] - a[1]).forEach(element => {
        [key, value] = element;

        console.log(`${key} = ${value}`);        
    });
}

solve('cat', 42, function () { console.log('Hello world!'); }, function () { console.log('Hello world!'); });