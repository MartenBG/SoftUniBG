function solve(arr) {

    let people = {};

    for (const input of arr) {
        let [cmd, p1, p2, p3] = input.split(':');

        if (cmd === 'Add') {
            people = newPerson(p1, p2, p3, people);
        }
        if (cmd === 'Attack') {
            people = attack(p1, p2, p3, people);
        }
        if (cmd === 'Delete') {
            people = deletion(p1, people);
        }
        if (cmd === 'Results') {
            break;
        }

    }

    let persons = Object.keys(people);
    console.log(`People count: ${persons.length}`);

    persons.sort((a, b) => people[b].health - people[a].health || ((a, b) => a.localeCompare(b)));

    for (const player of persons) {
        console.log(`${player} - ${people[player].health} - ${people[player].energy}`);

    }

    function newPerson(personName, health, energy, obj) {

        if (!obj[personName]) {
            obj[personName] = {
                health: Number(health),
                energy: Number(energy)
            };
        } else {
            obj[personName].health += Number(health);
        }
        return obj;
    }

    function attack(attackerName, defenderName, damage, obj) {

        if (obj[attackerName] && obj[defenderName]) {
            obj[defenderName].health -= Number(damage);
            obj[attackerName].energy--;
            if (obj[defenderName].health <= 0) {
                delete obj[defenderName];
                console.log(`${defenderName} was disqualified!`);
            }
            if (obj[attackerName].energy <= 0) {
                delete obj[attackerName];
                console.log(`${attackerName} was disqualified!`);
            }
        }

        return obj;
    }

    function deletion(userName, obj) {
        if (userName === 'All') {
            obj = {};
        }

        if (obj[userName]) {
            delete obj[userName];
        }
        return obj;
    }
}


solve([
    'Add:Bonnie:3000:5',
    'Add:Bonnie:3010:5',
    'Add:Johny:4000:10',
    'Attack:Johny:Bonnie:400',
    'Add:Chicken:1000:1',
    'Add:Rabbit:3000:5',
    'Add:Buggy:1259:10',
    'Attack:Chicken:Rabbit:1000',
    'Results'
]);

// solve([
//     'Add:Bonnie:3000:5',
//     'Add:Johny:4000:10',
//     'Delete:Johny',
//     'Add:Bonnie:3333:3',
//     'Results'
// ]);