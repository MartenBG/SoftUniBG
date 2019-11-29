function solve(arr, commands) {
    let modifiedArray = arr;

    for (let input of commands) {

        let currentInput = input.split(" ");
        let command = currentInput.shift();
        let inputs = currentInput.map(Number);

        switch (command) {
            case "add":
                modifiedArray.splice(inputs[0], 0, inputs[1]);
                break;
            case "addMany":
                for (let i = inputs.length - 1; i > 0; i--) {
                    modifiedArray.splice(inputs[0], 0, inputs[i]);
                }
                break;

            case "contains":
                if (modifiedArray.includes(inputs[0])) {
                    console.log(modifiedArray.indexOf(inputs[0]));
                } else {
                    console.log(-1);
                }
                break;

            case "remove":
                modifiedArray.splice(inputs[0], 1);
                break;

            case "shift":
                for (let k = 0; k < inputs[0]; k++) {
                    let element = modifiedArray.shift();
                    modifiedArray.push(element);
                }
                break;

            case "sumPairs":
                let sumArray = [];
                if (modifiedArray.length % 2 === 1) {
                    modifiedArray.push(0);
                }

                for (let m = 0; m < modifiedArray.length; m += 2) {
                    sumArray.push(modifiedArray[m] + modifiedArray[m + 1]);
                    // console.log(sumArray)
                }
                modifiedArray = sumArray;
                break;

            case "print":
                
                console.log(`[ ${modifiedArray.join(', ')} ]`);

                //console.log(typeof modifiedArray);

                return;

        }
    }
}
//solve([1, 2, 3, 4, 5], ['shift 2', 'print'])
// solve([1, 2, 4, 5, 6, 7, 8], ['sumPairs', 'print'])
//solve([1, 2, 3, 4, 5, 5, 5, 2, 6, 5], ['addMany 5 9 8 7 6 5', 'contains 5', 'remove 3','remove 3', 'shift 1', 'print']);
//solve([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])
//solve([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

solve([1, 2, 4, 5, 6, 7], ["add 1 8", "contains 1", "contains -3", "print"]);