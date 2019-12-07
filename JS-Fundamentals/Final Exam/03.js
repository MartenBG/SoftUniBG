function solve(arr) {

    let users = {};

    for (const input of arr) {

        let [cmd, name, text] = input.split('->');


        if (cmd === 'Statistics') {
            break;
        }
        if (cmd === 'Add') {

            if (!users[name]) {
                users[name] = [];
            } else {
                console.log(`${name} is already registered`);

            }

        }
        if (cmd === 'Send') {

            users[name].push(text);

        }
        if (cmd === 'Delete') {
            if (users[name]) {
                delete users[name];
            } else {
                console.log(`${name} not found!`);

            }

        }

    }

    let count = Object.keys(users);

    console.log(`Users count: ${count.length}`);


    let entries = Object.entries(users).sort((a, b) => b[1].length - a[1].length);

    for (const [name, msg] of entries) {

        console.log(name);
        for (const input of msg) {
            console.log(` - ${input}`);

        }

    }

}

solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);