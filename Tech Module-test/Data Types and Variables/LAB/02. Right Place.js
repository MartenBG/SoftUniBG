function solve(forCompare, char, rezult) {
    let newWord = forCompare.replace('_', char);
    console.log(newWord === rezult ? 'Matched' : 'Not Matched');
}
solve('Str_ng', 'o', 'Strong');