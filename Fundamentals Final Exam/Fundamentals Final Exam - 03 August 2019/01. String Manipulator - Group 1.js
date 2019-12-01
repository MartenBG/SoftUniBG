function solve(arr) {

    let string = arr.shift();

    for (const input of arr) {

        let line = input.split(' ');
        let command = line.shift();

        if (command === 'Translate') {
            let [char, replacement] = line;
            while (string.indexOf(char) !== -1) {
                string = string.replace(char, replacement);
            }
            console.log(string);

        }
        if (command === 'Includes') {
            let currentString = line.shift();
            let index = string.indexOf(currentString);
            if (index !== -1) {
                console.log('True');
            } else {
                console.log('False');
            }
        }
        if (command === 'Start') {
            let currentString = line.shift();
            let index = string.indexOf(currentString);
            if (index === 0) {
                console.log('True');
            } else {
                console.log('False');
            }
        }
        if (command === 'Lowercase') {
            string = string.toLowerCase();
            console.log(string);
        }
        if (command === 'FindIndex') {
            let char = line.shift();
            let index = string.lastIndexOf(char);
            console.log(index);
        }
        if (command === 'Remove') {
            let startIndex = Number(line.shift());
            let count = Number(line.shift());
            let sub = string.substr(startIndex, count);
            string = string.replace(sub, '');
            console.log(string);
        }

    }

}
solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);