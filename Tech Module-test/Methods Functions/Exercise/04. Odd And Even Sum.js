function oddEvenSum(num) {
    num = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < num.length; i++) {
        let current = Number(num[i]);
        if (current % 2 === 0) {
            evenSum += current;
        } else
            oddSum += current;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEvenSum(3495892137259234);