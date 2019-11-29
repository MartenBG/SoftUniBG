function vehicleTaxCalculator(type, kW, carAge) {
    let power = Number(kW);
    let age = Number(carAge);
    let powerCoefficient = coefficientFromPower(power);
    let agesCoefficient = coefficientFromAge(age);
    let motorcycle = motorcycleTax(power);
    let tax = 0;
    switch (type) {
        case 'car': tax = powerCoefficient * agesCoefficient;
            console.log(tax.toFixed(2) + ' lv.');
            break;
        case 'motorcycle': tax = motorcycle;
            console.log(tax.toFixed(2) + ' lv.');
    }
    function coefficientFromPower(power) {
        let powerCoefficient = 0;
        if (power < 37) {
            powerCoefficient = power * 0.43;
        } else if (power < 55) {
            powerCoefficient = power * 0.5;
        } else if (power < 74) {
            powerCoefficient = power * 0.68;
        } else if (power < 110) {
            powerCoefficient = power * 1.38;
        } else {
            powerCoefficient = power * 1.54;
        }

        return powerCoefficient;
    }

    function coefficientFromAge(age) {
        let agesCoefficient = 0;
        if (age < 5) {
            agesCoefficient = 2.8;
        } else if (age <= 14) {
            agesCoefficient = 1.5;
        } else if (age > 14) {
            agesCoefficient = 1;
        }

        return agesCoefficient;
    }

    function motorcycleTax(power) {
        let taxPrice = 0;
        if (power > 750) {
            taxPrice = 125;
        } else if (power > 490) {
            taxPrice = 94;
        } else if (power > 350) {
            taxPrice = 63;
        } else if (power > 250) {
            taxPrice = 44;
        } else if (power > 125) {
            taxPrice = 31;
        } else {
            taxPrice = 15;
        }

        return taxPrice;
    }
}
//vehicleTaxCalculator('car', 450, 10);
vehicleTaxCalculator('motorcycle', 450, 10);