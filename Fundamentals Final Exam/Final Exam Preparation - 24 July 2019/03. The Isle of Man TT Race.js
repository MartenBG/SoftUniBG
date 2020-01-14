function solve(arr) {

    for (const inp of arr) {
        let pattern = /^([#$%*&])(?<name>\w+)(\1)=(?<code>\d+)!!(?<msg>.+)$/gm;
        let match = pattern.exec(inp);

        if (match) {
            let {
                name,
                code,
                msg
            } = match.groups;

            if (+(code) !== msg.length) {
                console.log('Nothing found!');
            } else {
                let newMsg ='';
                msg.split('').forEach(char => {
                    newMsg += String.fromCharCode(char.charCodeAt(0) + Number(code));
                });
                console.log(`Coordinates found! ${name} -> ${newMsg}`);                
            }

        } else {
            console.log('Nothing found!');

        }
    }
}

solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
]);