function sorting(arr) {
    arr = arr.sort(compare);

    function compare(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a.localeCompare(b); // a > b  сортиране по букви
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }
    arr.forEach(element => console.log(element));
    //console.log(arr.join("\n"))

    // arr = arr.sort((a, b) => {
    //     return a.length - b.length || a.localeCompare(b);
    // }).forEach(element => console.log(element));

}

sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]);