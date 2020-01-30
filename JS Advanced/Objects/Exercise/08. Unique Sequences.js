function solve(array) {

    let ar = [];

    array.map(x => JSON.parse(x)).reduce((a, b) => {
        if (a.length !== b.length) {

            ar.push(b.sort((a, b) => b - a));
            return a;
        }
        const aSorted = a.sort((a, b) => b - a);
        const bSorted = b.sort((a, b) => b - a);

        isTrue = aSorted
            .map((val, i) => bSorted[i] === val)
            .every(isSame => isSame);

        if (isTrue) {
            ar.push(b);
        }
        return a;

    });
    
   // console.log(array);
    

    ar.sort((a, b) => a.length - b.length).forEach(element => {

        //whiteOut = element.filter((item) => item != ' ');
        console.log(`[${element.join(', ')}]`);

    });

}

solve([
    '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]'
]);