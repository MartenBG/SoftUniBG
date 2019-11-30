function solve(arr) {

    let pattern = /^(?<start>[$]|[%])(?<tag>[A-Z][a-z]{2,})(\k<start>): \[(?<one>[\d]+)\]\|\[(?<two>[\d]+)\]\|\[(?<tree>[\d]+)\]\|$/g;

}

solve([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);
