function solve(arr) {
    let leftSum = 0;
    let isMatch = false;
    let lengthCheck = arr.length;
    if (arr.length === 1) {
        console.log(0);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        leftSum += arr[i];
        let rightSum = 0;
        for (let j = arr.length - 1; j > 0; j--) {
            count++;
            rightSum += arr[j];
            if (leftSum === rightSum && ((i + count) < lengthCheck)) {
                console.log(i + 1);
                isMatch = true;
            }
        }
        if (isMatch) {
            break;
        }
    }
    if (!isMatch) {
        console.log('no');
    }
}
//solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//solve([1, 2, 3, 3]);
 solve([1, 2, 3]);