// 1. solution
const arr = [];
while (arr.length < 50) {
  arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr);

// 2. solution
const sortedarray = arr.sort((a, b) => b - a);
console.log(sortedarray);

// 3. solution
const totalarray = arr.reduce((acc, curr) => acc + curr, 0);
console.log(totalarray);

// 4.

const evenvalue = arr.filter((item, index) => item % 2 === 0);
console.log(evenvalue);

const oddvalue = arr.filter((item, index) => item % 2 !== 0);
console.log(oddvalue);

// 5.

sortedarray.forEach((num, index) => {
  const newarr = sortedarray.filter((n) => n === num);
  if (newarr.length > 1) {
    sortedarray.splice(index, newarr.length - 1);
  }
});
console.log(sortedarray);

// Challenge 2
const arrunique = [];
while (arrunique.length < 50) {
  const r = Math.floor(Math.random() * 100) + 1;
  if (arrunique.indexOf(r) === -1) {
    arrunique.push(r);
  }
}
console.log(arrunique);
