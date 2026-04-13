// const and array
const arr = [10, 20];
arr.push(30);   // yes
delete arr[1];  // yes
arr[0] = 15;    // Yes
console.log(arr);

// arr = []; // a new array cann't be assigned to the variable arr

// const and object
const obj = { a: 100, b: 200 };
obj.c = 300;  // Yes
delete obj.b; // Yes
obj.a = 150;  // Yes
console.log(obj);

// obj = {}; // Assignment to constant variable