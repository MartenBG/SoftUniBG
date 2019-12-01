function solve(arr) {

    for (const mess of arr.slice(1)) {

        let pattern = /^(?<start>[$]|[%])(?<tag>[A-Z][a-z]{2,})(\k<start>): \[(?<one>[\d]+)\]\|\[(?<two>[\d]+)\]\|\[(?<tree>[\d]+)\]\|$/g;

        let match = pattern.exec(mess);
        if (match) {
            let { tag, one, two, tree } = match.groups;
            console.log(`${tag}: ${String.fromCharCode(one, two, tree)}`);
        } else {
            console.log('Valid message not found!');
        }

    }

}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);
