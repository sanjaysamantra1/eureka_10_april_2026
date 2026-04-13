console.log(`a : ${a}`);
// console.log(`b : ${b}`);     // Cannot access 'b' before initialization
// console.log(`c : ${c}`);     // Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;

console.log(`a : ${a}`); // 10
console.log(`b : ${b}`); // 20
console.log(`c : ${c}`); // 30