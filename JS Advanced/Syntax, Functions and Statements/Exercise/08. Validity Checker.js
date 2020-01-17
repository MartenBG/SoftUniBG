function solve(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let result = 0;
    let temp = '';

    distance(x1, y1, 0, 0);
    console.log(`{${x1}, ${y1}} to {0, 0} ${temp}`);
    distance(0, 0, x2, y2);
    console.log(`{${x2}, ${y2}} to {0, 0} ${temp}`);
    distance(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${temp}`);


    function distance(x11, y11, x22, y22) {

        result = Math.sqrt(Math.pow(x22 - x11, 2) + Math.pow(y22 - y11, 2));

        if (result % 1 === 0) {
            temp = 'is valid';
            return temp;

        } else {
            temp = 'is invalid';
            return temp;
        }

    }

}

solve([2, 1, 1, 1]);