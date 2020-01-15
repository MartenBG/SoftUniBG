function solve(fruit, weight, price) {

    weight /= 1000;

    let money = price * weight;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);

}

solve('orange', 2500, 1.80);