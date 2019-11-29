function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            helmetBroken++;
        }
        if (i % 3 === 0) {
            swordBroken++;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBroken++;
        }
    }
    let armorBroken = Math.floor(shieldBroken / 2);
    let totalCost = (helmetBroken * helmetPrice + swordBroken * swordPrice + shieldBroken * shieldPrice + armorBroken * armorPrice);
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`)
}
solve(23, 12.50, 21.50, 40, 200);