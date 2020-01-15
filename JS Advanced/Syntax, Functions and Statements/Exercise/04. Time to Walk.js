function ttw(steps, footprint, kmh) {

    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);
    let converted = (kmh * 0.277778);
    let addTime = breaks * 60;

    let timeInSeconds = ((distance / converted) + addTime).toFixed(2);
    console.log(timeInSeconds);
    

    let result = new Date(null, null, null, null, null, timeInSeconds);

    console.log(result);
    




}

ttw(4000, 0.60, 5);
//ttw(2564, 0.70, 5.5);
