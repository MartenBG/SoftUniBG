function solve(arr) {

    let tickets = arr[0].split(', ');

    for (const input of tickets) {
        let pattern = /(?<first>[@#$^]{6,}).+(\k<first>)/g;
        let data = input.trim();
        if (data.length !== 20) {
            console.log('invalid ticket');
            continue;
        }
        let ticket = data.split('');
        ticket.splice(10, 0, ' ');
        ticket = ticket.join('');
        let match = pattern.exec(ticket);
        if (match) {
            let { first } = match.groups;
            let count = first.length;
            let char = first[0];
                      
            if (count === 10) {
                console.log(`ticket "${data}" - ${count}${char} Jackpot!`);

            } else {
                console.log(`ticket "${data}" - ${count}${char}`);
            }

        } else {
            console.log(`ticket "${data}" - no match`);

        }

    }

}

solve(['$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey, th@@@@@@@em@@@@@@@ey']);