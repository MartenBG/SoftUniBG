function solve(arr) {

    let string = arr.shift();

    for (const line of arr) {
        let [cmd, p1, p2] = line.split(' ');

        if (cmd === 'Change') {
            string = replace(p1, p2);
        }
        if (cmd === 'Includes') {
            check(p1);
        }
        if (cmd === 'End') {
            checkEnd(p1);
        }
        if (cmd === 'Uppercase') {
            string = string.toUpperCase();
            console.log(string);
        }
        if (cmd === 'FindIndex') {
            console.log(string.indexOf(p1));
        }
        if (cmd === 'Cut') {
            string = string.substr(Number(p1), Number(p2));
            console.log(string);
        }
        if (cmd === 'Done') {
            break;
        }
    }

    function replace(char, replacement) {

        while (string.indexOf(char) !== -1) {
            string = string.replace(char, replacement);
        }

        console.log(string);
        return string;
    }

    function checkEnd(str) {
        if (string.endsWith(str)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function check(str1) {
        if (string.includes(str1) !== -1) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);