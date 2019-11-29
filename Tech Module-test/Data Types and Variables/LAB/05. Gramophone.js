function solve(band, album, songName) {
    
    let durationInSeconds = Number((album.length * band.length) * songName.length / 2);
    console.log(`The plate was rotated ${Math.ceil(durationInSeconds/2.5)} times.`);
}
solve('Black Sabbath', 'Paranoid', 'War Pigs');