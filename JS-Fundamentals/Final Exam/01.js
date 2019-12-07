function solve(arr) {
    let mail = arr.shift();

    for (const input of arr) {

        let data = input.split(' ');
        let cmd = data.shift();
        let p1 = data[0];


        if (p1 === 'Upper') {
            mail = mail.toUpperCase();
            console.log(mail);
        }
        if (p1 === 'Lower') {
            mail = mail.toLowerCase();
            console.log(mail);

        }
        if (cmd === 'GetDomain') {
            let mailLength = mail.length;
            let fromIndex = mailLength - p1;
            let last = '';

            last = mail.substr(fromIndex, 3);
            console.log(last);
        }
        if (cmd === 'GetUsername') {
            let index = mail.indexOf('@');
            if (index !== -1) {

                let name = '';

                name = mail.substring(0, index);
                console.log(name);
            } else {
                console.log(`The email ${mail} doesn't contain the @ symbol.`);

            }


        }
        if (cmd === 'Replace') {

            while (mail.indexOf(p1) !== -1) {

                mail = mail.replace(p1, '-');

            }
            console.log(mail);
        }
        if (cmd === 'Encrypt') {
            let output = '';
            for (const char of mail) {
                

                output += `${char.charCodeAt(0)} `;
            }

            console.log(output);

        }

    }
}


solve([
    'Mike123somemail.com',
    'Make Upper',
    'GetDomain 3',
    'Replace E',
    'GetUsername',
    'Encrypt',
    'Complete'
]);