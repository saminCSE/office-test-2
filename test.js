let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [];
let arr3 = [];
// arr3.push(arr.unshift());
// arr2.push(arr.shift());
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
let arr4 = [...arr];
arr4.splice(arr4.indexOf(7), 1);
console.log(arr4);

let arr5 = [...arr];
arr5.unshift(...arr5.splice(3));
console.log(arr5);

for (let i = 1; i <= 5; i++) {
  console.log(`test -> ${i}`);
}

const test1 = (a, b) => {
  return a + b;
};
