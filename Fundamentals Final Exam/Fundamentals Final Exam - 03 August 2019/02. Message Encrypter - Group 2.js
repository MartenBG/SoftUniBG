function solve(arr) {

    let justShift = arr.shift();

    for (const input of arr) {
        let pattern = /(?<start>[*]|@)(?<tag>[A-Z][a-z]{2,})(\k<start>): \[(?<one>[\w])\]\|\[(?<two>[\w])\]\|\[(?<tree>[\w])\]\|$/g;
        let match = pattern.exec(input);
        if (match) {
            let { tag, one, two, tree } = match.groups;
            console.log(`${tag}: ${one.charCodeAt(0)} ${two.charCodeAt(0)} ${tree.charCodeAt(0)}`);
        } else {
            console.log('Valid message not found!');
        }
    }
}

solve([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);