function printBar(percent) {
    percent = Number(percent) / 10;

    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];
    for (let i = 0; i < percent; i++) {
        bar.splice(i, 1, '%');
    }

    if (percent < 10) {
        console.log(`${percent * 10}% [${bar.join('')}]\nStill loading...`);
    } else if (percent === 10) {
        console.log(`${percent * 10}% Complete!\n[${bar.join('')}]`);
    }
}

printBar(100);