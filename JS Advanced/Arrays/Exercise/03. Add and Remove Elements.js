function solve(arr) {

    let count = 0;
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        count++;

        if (arr[i] === 'add') {
            output.push(count);
        } else {
            output.pop();
        }
    }

    for (const el of output) {
        console.log(el);

    }
    if (output.length < 1){
        console.log('Empty');
        
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);