function ttw(steps, footprint, kmh) {

    let distance = steps * footprint;
    let breaks = Math.floor(distance / 500);
    let converted = (kmh * 0.277778);
    let addTime = breaks * 60;

    let timeInSeconds = Math.ceil((distance / converted) + addTime);
    convertTime(timeInSeconds);

    function convertTime(sec) {
        var hours = Math.floor(sec / 3600);
        (hours >= 1) ? sec = sec - (hours * 3600) : hours = '00';
        var min = Math.floor(sec / 60);
        (min >= 1) ? sec = sec - (min * 60) : min = '00';
        (sec < 1) ? sec = '00' : void 0;

        (min.toString().length == 1) ? min = '0' + min : void 0;
        (sec.toString().length == 1) ? sec = '0' + sec : void 0;

        return console.log(hours + ':' + min + ':' + sec);
    }

    // let result = new Date(null, null, null, null, null, timeInSeconds);
    // console.log(result);
    
}

ttw(4000, 0.60, 5);

//ttw(2564, 0.70, 5.5);
