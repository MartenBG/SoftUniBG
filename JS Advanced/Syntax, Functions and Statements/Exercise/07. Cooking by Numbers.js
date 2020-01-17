function solve(arr) {

    let digit = +arr.shift();

    for (const command of arr) {

        switch (command) {
            case 'chop':
                digit /= 2;
                console.log(digit);
                break;
            case 'dice':
                digit = Math.sqrt(digit);
                console.log(digit);
                break;
            case 'spice':
                digit += 1;
                console.log(digit);
                break;
            case 'bake':
                digit *= 3;
                console.log(digit);
                break;
            case 'fillet':
                digit *= 0.8;
                console.log(digit.toFixed(1));
                break;

            default:
                break;
        }

    }

}


solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);