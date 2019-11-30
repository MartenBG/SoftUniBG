function solve(arr) {


    for (let pass of arr.slice(1)) {

        let pattern = /(?<start>.+)>(?<num>[\d]{3})\|(?<lowerL>[a-z]{3})\|(?<upperL>[A-Z]{3})\|(?<symbols>[^<>]{3})<(\k<start>)/g;

        let match = pattern.exec(pass);

        if (match) {
            let { num, lowerL, upperL, symbols } = match.groups;

            let decrypted = `${num}${lowerL}${upperL}${symbols}`;

            console.log(`Password: ${decrypted}`);
            
        }else{
            console.log('Try another password!');
            
        }
    }

}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);