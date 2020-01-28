function solve(array) {


    let test = array.reduce((acc, input, i) => {

        if (!acc.includes(input)) {
            acc.push(input);
            return acc;
        } else {
            return acc;
        }
        // return acc;

    }, []);

    let sorted = test.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(element => {
        console.log(element);

    });


}

solve(['Denise', 'Ignatius', 'Iris', 'Isacc', 'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin', 'Biser', 'Bounty', 'Renard', 'Rot']);