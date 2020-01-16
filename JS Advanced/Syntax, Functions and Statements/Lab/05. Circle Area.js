function solve(r) {

    let inputType = typeof (r);
    if (inputType === 'number') {
        let area = Math.PI * r * r;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);

    }

}

solve('name');