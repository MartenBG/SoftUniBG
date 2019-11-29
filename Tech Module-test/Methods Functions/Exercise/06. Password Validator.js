function passValidator(input) {
    isValid = true;
    isWrongSimbol = false;
    let arr = [];
    input = input.toLowerCase();
    let countNumbers = 0;

    if (input.length < 6 || input.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    for (let string of input) {
        arr.push(string);
    }

    for (let check in arr) {
        let current = (arr[check]);
        current = current.charCodeAt();
        if (current >= 48 && current <= 57) {
            countNumbers++;
        } else if (current < 48 || current > 57 && current < 65 || current > 90 && current < 97 || current > 122) {
            isValid = false;
            isWrongSimbol = true;
        }
    }

    if (isWrongSimbol) {
        console.log("Password must consist only of letters and digits");
    }

    if (countNumbers < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}
passValidator('Pae1ee');