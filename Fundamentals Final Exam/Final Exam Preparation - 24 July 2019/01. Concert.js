function solve(arr) {

  let bands = {};
  let isStart = false;
  let totalTime = 0;

  for (const input of arr) {

    let tokens = input.split('; ');
    let cmd = tokens.shift();

    if (cmd === 'Add') {
      let nameOfBand = tokens.shift();
      let splitNames = tokens.shift().split(', ');

      if (!bands[nameOfBand]) {
        bands[nameOfBand] = {
          members: splitNames,
          time: 0
        };

      } else {
        for (const member of splitNames) {

          let found = bands[nameOfBand].members.find((name) => name === member);

          if (!found) {
            bands[nameOfBand].members.push(member);
          }
        }
      }
    }

    if (cmd === 'Play') {
      let nameOfBand = tokens.shift();
      let seconds = Number(tokens.shift());
      totalTime += seconds;
      if (!bands[nameOfBand]) {
        bands[nameOfBand] = {
          members: [],
          time: seconds
        };

      } else {
        bands[nameOfBand].time += seconds;
      }

    }

    if (cmd === 'start of concert') {
      isStart = true;
    }

  }

  let namesFromBands = Object.keys(bands).sort((a, b) => bands[b].time - bands[a].time);

  if (isStart) {
    console.log(`Total time: ${totalTime}`);
    let band = arr[arr.length - 1];

    for (const theBand of namesFromBands) {
      console.log(`${theBand} -> ${bands[theBand].time}`);

    }
    console.log(band);

    bands[band].members.forEach(name => {
      console.log(`=> ${name}`);

    });

  }

}

solve([
  'Play; The Beatles; 2584',
  'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
  'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
  'Play; Eagles; 1869',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
  'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
  'Play; The Rolling Stones; 4239',
  'start of concert',
  'The Rolling Stones'
]);