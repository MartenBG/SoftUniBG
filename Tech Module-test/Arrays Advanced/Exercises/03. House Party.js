function party(arr) {
    let listOfPeople = [];

    for (let nameStatus of arr) {
        let currentNameStatus = nameStatus.split(" ");
        if (currentNameStatus[2] != "not") {

            if (listOfPeople.includes(currentNameStatus[0])) {
                console.log(`${currentNameStatus[0]} is already in the list!`);
            } else {
                listOfPeople.push(currentNameStatus[0]);
            }

        } else if (!listOfPeople.includes(currentNameStatus[0])) {
            console.log(`${currentNameStatus[0]} is not in the list!`)
        } else {
            listOfPeople.pop();
        }
    }

    console.log(listOfPeople.join("\n"));
}

//party(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
party(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);