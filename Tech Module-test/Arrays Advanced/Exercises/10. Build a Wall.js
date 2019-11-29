
function printBuildingStat(params) {
    params = params.map(Number);
    let pesosPerCubicYardConcrete = 1900;
    let cubicYardsConcreteUsedPerCrewForADay = 195;

    let dailyConcreteUsage = [];

    let isCompleted = false;
    while (!isCompleted) {
        isCompleted = true;
        let currentlyWorkingCrewsCount = 0;

        for (let i = 0; i < params.length; i++) {
            if (params[i] < 30) {
                params[i]++;
                isCompleted = false;
                currentlyWorkingCrewsCount++;
            }
        }

        if (currentlyWorkingCrewsCount > 0) {
            dailyConcreteUsage.push(currentlyWorkingCrewsCount * cubicYardsConcreteUsedPerCrewForADay);
        }
    }

    console.log(dailyConcreteUsage.join(', '));
    console.log(`${dailyConcreteUsage.reduce((a, b) => a + b) * pesosPerCubicYardConcrete} pesos`);    
}
printBuildingStat(['21', '25', '28']);