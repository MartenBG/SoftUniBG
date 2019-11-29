function carTaxCalculator(kW) {
    let power = Number(kW)
    calculate(power);
    function calculate(power) {
        let taxInLv = 0;
        if (kW < 37) {
            taxInLv = power * 0.43;
        } else if (power < 55) {
            taxInLv = power * 0.5;
        } else if (power < 74) {
            taxInLv = power * 0.68;
        } else if (kW < 110) {
            taxInLv = power * 1.38;
        } else {
            taxInLv = power * 1.54;
        }

        console.log(taxInLv.toFixed(2) + " lv.");
    }
}
    carTaxCalculator(255.9);