function factorial(num, num1) {
    let rezult1 = factOne(num);
    let rezult2 = factTwo(num1);

    function factOne(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factOne(num - 1));
        }
    }

    function factTwo(num1) {
        if (num1 < 0)
            return -1;
        else if (num1 == 0)
            return 1;
        else {
            return (num1 * factTwo(num1 - 1));
        }
    }

    console.log(`${(rezult1 / rezult2).toFixed(2)}`);
}

factorial(6, 5);