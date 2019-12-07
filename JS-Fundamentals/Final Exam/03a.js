function solve(input) {
    let data = {};

    for (let line of input) {
        if (line === "Statistics") {
            break;
        }
        let cmd = line.split("->");

        switch (cmd[0]) {
            case "Add":
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = [];
                } else {
                    console.log(`${cmd[1]} is already registered`);
                }
                break;
            case "Send":
                let user = cmd[1];
                let message = cmd[2];
                data[user].push(message);
                break;
            case "Delete":
                let username = cmd[1];
                if (!data.hasOwnProperty(username)) {
                    console.log(`${username} not found!`);
                } else {
                    delete data[username];
                }
                break;
        }
    }
    let userCounter = Object.keys(data).length;
    console.log(`Users count: ${userCounter}`);
    let sorted = Object.entries(data);
    sorted = sorted.sort(
        (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    sorted.forEach(player => {
        console.log(player[0]);
        player[1].forEach(email => {
            console.log(` - ${email}`);
        });
    });
}

solve([
    "Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Some random test mail",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Send->George->It would be a pleasure",
    "Send->Mike->Another random test mail",
    "Statistics"
]);