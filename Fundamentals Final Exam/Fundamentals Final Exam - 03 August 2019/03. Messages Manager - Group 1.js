function solve(arr) {

    let users = {};
    let maxCapacity = Number(arr.shift());

    for (const input of arr) {

        let [command, p1, p2, p3] = input.split('=');
        if (command === 'Add') {
            users = addNewUser(p1, p2, p3, users);
            continue;
        }
        if (command === 'Message') {
            users = message(p1, p2, users);
        }
        if (command === 'Empty') {
            users = deleteUser(p1, users);
        }
        if (command === 'Statistics') {
            break;
        }
    }

    let catalogue = Object.keys(users);

    console.log(`Users count: ${catalogue.length}`);

    catalogue.sort((a, b) => users[b].received - users[a].received || ((a, b) => a.localeCompare(b)));

    for (const cUser of catalogue) {
        let total = users[cUser].sent + users[cUser].received;
        console.log(`${cUser} - ${total}`);

    }

    function addNewUser(userName, sent, received, obj) {

        if (!obj[userName]) {
            obj[userName] = {
                sent: +sent,
                received: +received
            };
        }
        return obj;
    }

    function message(sender, receiver, obj) {

        if (obj[sender] && obj[receiver]) {
            obj[sender].sent++;
            obj[receiver].received++;

            let currentSender = obj[sender].sent + obj[sender].received;
            if (currentSender >= maxCapacity) {
                console.log(`${sender} reached the capacity!`);
                delete obj[sender];
            }

           
            let currentRec = obj[receiver].sent + obj[receiver].received;
            if (currentRec >= maxCapacity) {
                console.log(`${receiver} reached the capacity!`);
                delete obj[receiver];
            }
        }

        return obj;
    }

    function deleteUser(user, obj) {

        if (user === 'All') {
            obj = {};
        }
        if (obj[user]) {
            delete obj[user];
        }
        return obj;
    }

}

solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
]);

// solve(['12',
//     'Add=Bonnie=3=5',
//     'Add=Johny=4=4',
//     'Empty=All',
//     'Add=Bonnie=3=3',
//     'Statistics'
// ]);