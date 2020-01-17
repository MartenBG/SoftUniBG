function roadRadar(arr) {

    let currentSpeed = 0;
    let speed = arr[0];
    let roadType = arr[1];

    switch (roadType) {
        case 'residential':
            currentSpeed = speed - 20;
            print(currentSpeed);
            break;
        case 'city':
            currentSpeed = speed - 50;
            print(currentSpeed);
            break;
        case 'interstate':
            currentSpeed = speed - 90;
            print(currentSpeed);
            break;
        case 'motorway':
            currentSpeed = speed - 130;
            print(currentSpeed);
            break;
        default:
            break;
    }

    function print(speedInput) {

        if (speedInput > 0 && speedInput <= 20) {
            return console.log('speeding');

        } else if (speedInput > 20 && speedInput <= 40) {
            return console.log('excessive speeding');

        } else if (speedInput > 40) {
            return console.log('reckless driving');
        }
    }
}

roadRadar([51, 'city']);