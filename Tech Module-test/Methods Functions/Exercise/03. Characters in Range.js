function inRange(startSymbol, endSymbol) {
    startSymbol = startSymbol.charCodeAt();
    endSymbol = endSymbol.charCodeAt();
    let symbolArr = [];
    if (startSymbol > endSymbol) {
        let temp = startSymbol;
        startSymbol = endSymbol;
        endSymbol = temp;
    }
    for (let i = startSymbol + 1; i < endSymbol; i++) {
        symbolArr.push(String.fromCharCode(i));
    }

    console.log(symbolArr.join(' '));
}
inRange('C', '#');