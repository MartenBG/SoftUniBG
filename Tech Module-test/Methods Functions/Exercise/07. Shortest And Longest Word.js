function longAndShortWord(sentence) {

    let longestWord = '';
    let shortestWord = '';
    let lengthMin = 0;
    let lengthMax = 50;
    let arr = sentence.split(/[\ \,\.\?\!\-]+/g);
    arr.pop();
    arr.forEach(function (word) {
        if (word.length > lengthMin) {
            lengthMin = word.length;
            longestWord = word;
        }
        if (lengthMax > word.length) {
            lengthMax = word.length;
            shortestWord = word;
        }
    });

    console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);
}

longAndShortWord('Hello people, are you familiar with the terms of application at the software university?');