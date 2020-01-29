function solve(name, age, weight, height) {


    let bmi = Math.round((weight / Math.pow((height / 100), 2)));

    status = function (num) {

        if (num < 18.5) {
            return 'underweight';
        } else if (num < 25) {
            return 'normal';
        } else if (num < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    };

    let profile = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status(bmi)
    };
    if (profile.status === 'obese') {
        profile.recommendation = 'admission required';
    }

    return profile;
}


console.log(solve('Мартин', 45, 78, 183));