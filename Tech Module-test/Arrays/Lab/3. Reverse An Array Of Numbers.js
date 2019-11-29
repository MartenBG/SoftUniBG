function solve(num, arr) {
    let output = '';
    for (let i = 0; i < num; i++) {
        output += `${arr[(num-1)-i]} `;
      }
    console.log(output);
}
solve(3, [10, 20, 30, 40, 50]);