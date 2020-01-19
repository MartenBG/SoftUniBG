function solve(arr) {

    const game = [];
    let player = 1;
    let counter = 0;


    for (let row = 0; row < 3; row++) {
        game[row] = [];
        for (let col = 0; col < 3; col++) {
            game[row][col] = false;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        
        if (counter === 9) {
            console.log('The game ended! Nobody wins :(');
            break;

        }

        let move = arr[i].split(' ');
        let row = Number(move[0]);
        let col = Number(move[1]);

        if (game[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
        } else if (player === 1) {
            game[row][col] = 'X';
            player = 2;
            counter++;

        } else if (player === 2) {
            game[row][col] = 'O';
            player = 1;
            counter++;
        }
        if ((game[0][0] === 'X' && game[0][1] === 'X' && game[0][2] === 'X') || (game[1][0] === 'X' && game[1][1] === 'X' && game[1][2] === 'X') || (game[2][0] === 'X' && game[2][1] === 'X' && game[2][2] === 'X') ||
            (game[0][0] === 'X' && game[1][0] === 'X' && game[2][0] === 'X') || (game[0][1] === 'X' && game[1][1] === 'X' && game[2][1] === 'X') || (game[0][2] === 'X' && game[1][2] === 'X' && game[2][2] === 'X') ||
            (game[0][0] === 'X' && game[1][1] === 'X' && game[2][2] === 'X') || (game[0][2] === 'X' && game[1][1] === 'X' && game[2][0] === 'X')) {
            console.log('Player X wins!');
            break;
        }
        if ((game[0][0] === 'O' && game[0][1] === 'O' && game[0][2] === 'O') || (game[1][0] === 'O' && game[1][1] === 'O' && game[1][2] === 'O') || (game[2][0] === 'O' && game[2][1] === 'O' && game[2][2] === 'O') ||
            (game[0][0] === 'O' && game[1][0] === 'O' && game[2][0] === 'O') || (game[0][1] === 'O' && game[1][1] === 'O' && game[2][1] === 'O') || (game[0][2] === 'O' && game[1][2] === 'O' && game[2][2] === 'O') ||
            (game[0][0] === 'O' && game[1][1] === 'O' && game[2][2] === 'O') || (game[0][2] === 'O' && game[1][1] === 'O' && game[2][0] === 'O')) {
            console.log('Player O wins!');
            break;
        }

      
    }

    game.forEach(element => {

        console.log(element.join('\t'));


    });
}

solve([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);