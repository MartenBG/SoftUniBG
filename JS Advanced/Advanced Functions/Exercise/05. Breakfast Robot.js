let manager = (function (data) {

    const robot = {
        protein: 0,
        carbohydrates: 0,
        fat: 0,
        flavours: 0
    };
    const products = {
        apple: {
            carbohydrates: 1,
            flavours: 2
        },
        lemonade: {
            carbohydrates: 10,
            flavours: 20
        },
        burger: {
            carbohydrates: 5,
            flavours: 3,
            fat: 7
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavours: 1
        },
        tyrkey: {
            protein: 10,
            carbohydrates: 10,
            fat: 10,
            flavours: 10
        }
    };

 return Object.entries(robot);

})();
console.log(manager);