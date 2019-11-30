function solve(arr) {


    let string = arr.shift();

    for (const line of arr) {

        if (line === 'Sign up') {
            break;
        }
        let data = line.split(' ');
        let command = data.shift();

        if (command === 'Case') {
            if (data[0] === 'lower') {
                string = string.toLowerCase();
            } else {
                string = string.toUpperCase();
            }
            console.log(string);

        }

        if (command === 'Reverse') {

            let [startIndex, endIndex] = data.map(Number);

            if (startIndex >= 0 && endIndex < string.length - 1) {

                let subString = string.substring(startIndex, endIndex + 1).split('').reverse().join('');
                console.log(subString);
            }
        }

        if (command === 'Cut') {
            let sub = data[0];

            if (string.indexOf(sub) !== -1) {

                string = string.replace(sub, '');
                console.log(string);

            } else {
                console.log(`The word ${string} doesn't contain ${sub}.`);
            }
        }
        if (command === 'Replace') {
            let char = data[0];
            while (string.indexOf(char) !== -1) {
                string = string.replace(char, '*');
            }
            console.log(string);

        }
        if (command === 'Check') {
            let char = data[0];
            if (string.indexOf(char) === -1) {
                console.log(`Your username must contain ${char}.`);

            }else{
                console.log('Valid');
                
            }
        }
    }
    //console.log(string);
}

solve(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up']);