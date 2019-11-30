function solve(arr) {

    let followers = {};

    for (const input of arr) {
        let line = input.split(': ');
        let command = line.shift();

        if (command === 'New follower') {
            let follower = line[0];
            if (!followers.hasOwnProperty(follower)) {
                followers[follower] = 0;
            }

        }
        if (command === 'Like') {
            let [follower, count] = line;
            if (followers.hasOwnProperty(follower)) {
                followers[follower] += +count;
            } else {
                followers[follower] = +count;
            }

        }
        if (command === 'Comment') {
            let follower = line[0];
            if (!followers.hasOwnProperty(follower)) {
                followers[follower] = 1;
            } else {
                followers[follower]++;
            }
        }
        if (command === 'Blocked') {
            let follower = line[0];
            if (!followers.hasOwnProperty(follower)) {
                console.log(`${follower} doesn't exist.`);

            } else {
                delete followers[follower];
            }
        }
        if (command === 'Log out'){
            break;
        }
    }
    let output = Object.entries(followers).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log(`${output.length} followers`);
    for (const [name, sum] of output) {

        console.log(`${name}: ${sum}`);

    }

}

// solve([
//     'Like: A: 3',
//     'Comment: A',
//     'New follower: B',
//     'Blocked: A',
//     'Comment: B',
//     'Like: C: 5',
//     'Like: D: 5',
//     'Log out'
// ]);

solve([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Blocked: marto',
    'Log out'
]);