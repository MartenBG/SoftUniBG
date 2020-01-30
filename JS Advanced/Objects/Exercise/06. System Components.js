function solve(arr) {



    let parsedData = arr.reduce((acc, input) => {

        let [systemName, componentName, subcomponentName] = input.split('|').map(x => x.trim());

        if (!acc[systemName]) {
            acc[systemName] = {
                [componentName]: [subcomponentName]
            };

            return acc;

        }

        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [subcomponentName];
            return acc;

        }

        //acc[systemName][componentName] = [...acc[systemName][componentName], subcomponentName];
        acc[systemName][componentName].push(subcomponentName);

        return acc;

    }, {});


    let sortedSys = Object.keys(parsedData).sort((a, b) => {

        if (Object.keys(parsedData[a]).length !== Object.keys(parsedData[b]).length) {
            return parsedData[b].length - parsedData[a].length;
        } else {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }

    });

    for (let sys of sortedSys) {
        console.log(sys);
        let compSort = Object.keys(parsedData[sys]).sort((a, b) => sortComp(sys, a, b));

        for (let components of compSort) {
            console.log(`|||${components}`);
            parsedData[sys][components].forEach(e => {
                console.log(`||||||${e}`);

            });
        }


    }

    function sortComp(sys, a, b) {
        return Object.keys(parsedData[sys][b]).length - Object.keys(parsedData[sys][a]).length;
    }

}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);