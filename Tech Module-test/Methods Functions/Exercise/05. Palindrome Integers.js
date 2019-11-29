function palindromeOrNot(arr) {
    let currentNumber = 0;
    let reversedNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        currentNumber = Number(arr[i]);
        reversedNumber = arr[i].toString();
        reversedNumber = Number(reversedNumber.split('').reverse().join(''));
        if (currentNumber === reversedNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeOrNot([32,2,232,1010]);