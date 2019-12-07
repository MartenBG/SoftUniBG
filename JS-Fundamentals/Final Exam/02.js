function solve(arr) {

    let count = 0;
    for (const input of arr.slice(1)) {

        let pattern = /U\$(?<name>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5,}[\d]+)P@\$/g;

        let match = pattern.exec(input);

        if (match) {
            count++;
            let {
                name,
                pass
            } = match.groups;

            console.log(`Registration was successful\nUsername: ${name}, Password: ${pass}`);

        } else {
            console.log('Invalid username or password');

        }

    }
    console.log(`Successful registrations: ${count}`);



}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);