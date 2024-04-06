// // 1. solution
// const arr = [];
// while (arr.length < 50) {
//   arr.push(Math.floor(Math.random() * 100) + 1);
// }
// console.log(arr);

// // 2. solution
// const sortedarray = arr.sort((a, b) => b - a);
// console.log(sortedarray);

// // 3. solution
// const totalarray = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(totalarray);

// // 4.

// const evenvalue = arr.filter((item, index) => item % 2 === 0);
// console.log(evenvalue);

// const oddvalue = arr.filter((item, index) => item % 2 !== 0);
// console.log(oddvalue);

// // 5.

// sortedarray.forEach((num, index) => {
//   const newarr = sortedarray.filter((n) => n === num);
//   if (newarr.length > 1) {
//     sortedarray.splice(index, newarr.length - 1);
//   }
// });
// console.log(sortedarray);

// // Challenge 2
// const arrunique = [];
// while (arrunique.length < 50) {
//   const r = Math.floor(Math.random() * 100) + 1;
//   if (arrunique.indexOf(r) === -1) {
//     arrunique.push(r);
//   }
// }
// console.log(arrunique);

// // DATE Challenge

// const checkdate = (food, date) => {
//   const today = new Date();
//   const expired = new Date(date);
//   const result = expired.getTime() - today.getTime(); // will give a number a timestamp
//   // console.log(typeof result);

//   // console.log(today);

//   const expiry = Math.floor(Math.abs(result / (1000 * 60 * 60 * 24)));
//   if (expiry <= 24 && expiry <= 0) {
//     return console.log(`You have ${food} to expire within  a day`);
//   }
//   // console.log(expiry);

//   if (result < 0) {
//     return console.log(`${food} is expired ${expiry} days ago`);
//   } else {
//     return console.log(`You got ${expiry} days to use ${food}`);
//   }
// };
// checkdate('Rice', '2024-04-06 ');
// // You have Rice to expire within a day if today is 2024-02-05

// // calling
// const data1 = Date(checkdate('Cabbage', '2024-04-01'));
// console.log(data1); // Cabbage is expired 4 days ago

// const data2 = Date(checkdate('Banana', '2024-04-13'));
// console.log(data2); // You have 7 days to use Banana

// BMI Challenge:
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);
