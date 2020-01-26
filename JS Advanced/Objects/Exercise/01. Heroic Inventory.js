function solve(arr) {

    let heroData = [
    ];

    for (let i = 0; i < arr.length; i++) {
        const currentHeroData = arr[i].split(' / ');
        let currentHeroName = currentHeroData[0];
        let currentHeroLevel = Number(currentHeroData[1]);
        let currentHeroItems = [];

        if (currentHeroData.length > 2) {
            currentHeroItems = currentHeroData[2].split(', ');
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);

    }

    console.log(JSON.stringify(heroData));

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);