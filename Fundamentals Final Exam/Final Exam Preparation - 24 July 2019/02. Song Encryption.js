function solve(arr) {



    for (const input of arr) {
        let output = '';

        let pattern = /^(?<band>[A-Z][a-z ']+)(?<sep>[:])(?<song>[A-Z ]+)/g;

        let match = pattern.exec(input);
        if (input === 'end') {
            break;
        }

        if (match) {
            let {
                band,
                sep,
                song
            } = match.groups;

            let key = band.length;
            let text = `${band}${sep}${song}`;

            text = text.split('');
            text.forEach(letter => {
                let ifLetter = letter.charCodeAt(0);
                if ((ifLetter >= 65 && ifLetter <= 90) || (ifLetter >= 97 && ifLetter <= 122)) {
                    let shifted = ifLetter + key;
                    let currentLetter = shifted;
                    if (shifted > 122 || (shifted > 90 && shifted <= 96)) {
                        currentLetter = String.fromCharCode(97 + key);
                        output += String.fromCharCode(currentLetter);
                    } else {
                        output += String.fromCharCode(currentLetter);
                    }
                } else if (ifLetter === 58) {
                    output += '@';
                } else if (ifLetter === 32) {
                    output += ' ';
                } else if(ifLetter === 39){
output+="'";
                }

            });

            console.log(`Successful encryption: ${output}`);
        } else {

            console.log('Invalid input!');

        }

    }

}

// solve([
//     'Michael Jackson:ANOTHER PART OF ME',
//     'Adele:ONE AND ONLY',
//     "Guns n'roses:NOVEMBER RAIN",
//     'Christina Aguilera: HuRt',
//     'end'
// ]);

solve([
    'Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
  ]);