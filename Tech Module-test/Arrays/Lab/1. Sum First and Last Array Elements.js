function solve(arr) {
   // let firstElement = Number(arr[0]);
   // let lastElement = Number(arr[Number(arr.length-1)]);
   // console.log(firstElement+lastElement);

let firstElement = Number(arr.shift());
let lasrElement = Number(arr.pop());
console.log(firstElement+lasrElement);





}
solve(['20', '30', '40']);