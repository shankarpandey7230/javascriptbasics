// // console.log('Hello Shankar ');
// // alert('Shankar ');
// // var let const
// var name = 'Shankar Pandey';
// // console.log(name);
// let education = 'Software Developer';
// console.log(name, education);

// // if no keyword is used then js assumes that it as var keyword
// education = 'engineer';
// console.log(education);

// const degree = 'Master';
// console.log(degree);

// // degree = 'PHD';
// // console.log(degree);

// // Javascript Operators
// 1.Arithematic Operators
// const a = 5;
// const b = 4;
// const c = 8;
// const result = a + b + c;
// console.log(result);

// const d = 'Shankar';
// const sum = a + b + d;
// console.log(sum);
// console.log(typeof sum);
// const res = d + a + b;
// console.log(res);
// console.log(typeof res);

// 2.Comparision Operators
// 3. Logical Operators

// JAVASCRIPT MATH OBJECT
// const value = Math;
// const value =Math.PI;

// const value = Math.round(0.67);
// const value = Math.round(0.45);
// const value = Math.round(1.345, 2);
// const value = Math.pow(3, 2);
// const value = Math.sqrt(9);
// const value = Math.ceil(1.456); to round to higher value;
// const value = Math.floor(1.981); gives the lower value
// const value = Math.min(10, 23, 9, 300, 1.45);
// const value = Math.max(10, 23, 9, 300, 1.45);
// const value = Math.random(); number between0-0.99999
// const value = Math.random() * 100;
// const val = Math.round(value);
// console.log(val);

// COMPARISION OPERATORS
// = means assigning value from right operand to the left one
// const v1 = 5;
// const v2 = '5';
// const result = v1 == v2;
// == means to check whether two dat are same or not
// === means to check whether two data value and data types are same or not type coercion
// const result = v1 === v2;
// console.log(result);
//Javascript is not a type programming language but it has got data types

// PRIMITIVE DATA TYPES
// REFERENCE DATA TYPES

// 1.PRIMITIVE DATA TYPES
// const value = 45;
// const value = 'Shankar Pandey'; //'', ``
// shankar; uncaught reference error
// ('shankar');
// make sure not to start number with  0; if you do so then it will convert into octal data value
// console.log(typeof value, value);

// const value = true;
// console.log(typeof value, value);

// const value = undefined;
// console.log(typeof value, value);

// const value = null; // it will occupy memory
// console.log(typeof value, value);

// How data are stored in memory?
//Difference between primitive and reference type

// Primitive Data Type
// let user = 'shankar';
// console.log(user);
// const user1 = user;
// console.log(user1);

// user = 'Pandey';

// console.log(user);
// console.log(user1);

// Referential Data Types

// Object
// const user = {
//   // key : value
//   firstName: 'Shankar',
//   lastName: 'Pandey',
//   num: 34,
// };
// console.log(user);
// const user1 = user;

// console.log(user1);
// user.firstName = 'Lamachaur';
// // console.log(user.firstName);
// console.log(user);
// console.log(user1);

// JAVASCRIPT DATA MANIPULATION

// 1.Number Manipulation

// safe number range is -2^53-1 to 2^53-1
// const num = 30_568_089;
// console.log(num);

// const num = 'a8.76a1';
// // const val = +num;
// // const val = parseInt(num);
// const val = parseFloat(num);
// isNaN(val);

// console.log(typeof val, val, isNaN(val));

// String Manipulation
// const string = '5' + '4';
// const string = 5 + 4 + '5' + 6;
// const string = 'Shankar a "Software Engineer"';
// const string = `I'm "Shankar" a 'Software' Engineer`;
// console.log(string);
// another way is using escape character \which will tell javascript not to read the next character

// const val = string.length
// const val = string.toLowerCase();
// const val = string.toUpperCase();
// const val = string[3];
// const val = string.charAt(3);
// const val = string.indexOf('a');
// const val = string.lastIndexOf('Software');
// const val = string.replace('Shankar', 'Pandey');
// replaceAll replaces all characters of string

// const val = string.slice(5, 10);
// const val = string.slice(6);
// const val = string.slice(-3, -2);
// const val = string.includes('z'); //case sensitive

// const val = string.search('Shankar');
// const val = string.search('zebra'); //if the string does not exist it will give -1;

// const val = string.substring(10, 15);
// const val = string.substr(5, 7);//deprecated

// const val = string.trim();

// const val = string.split('a');// you wont see a in the array formed

// const val = string.split('a').join('a');

// const val = string.concat(' new text in String');

// console.log(val);

// JAVASCRIPT CONDITIONAL STATEMENTS

// 1.If
// 2.If else
// 3.else if
// 4. switch

// const val = !'dhsn';
// if (!val) {
//   // statement
//   console.log('condition matched');
// } else {
//   console.log('condition did not match');
// }

// const age = 52;
// const vip = true;

// if ((age >= 18 && age < 50) || vip) {
//   console.log('welcome to the coding party');
// } else {
//   console.log('Not qualified for coding party ');
// }

// if (condition1) {
//   // statment
// } else if (condition2) {
//   // statment 2
// } else if (condition3) {
//   // statement3
// } else {
//   //defaultcoderuns
// }

// const pet = 'dog';
// if (pet === 'cat') {
//   console.log('meow');
// } else if (pet == 'dog') {
//   console.log('bark');
// } else {
//   console.log('askgklasjg');
// }

// SWITCH

// const pet = 'cow';

// switch (pet) {
//   case cat:
//     console.log('meow');
//     break;
//   case cow:
//     console.log('moo');
//     break;

//   default:
//     console.log('aksgklsajklg');
// }

// const age = 20;
// const vip = true;

// if (age < 50) {
//   console.log('welcome');
// }

// age < 50 && console.log('Welcome');

// const value = age || 'N/A';
// console.log(value);

// Ternary operator

// const age = 50;
// age < 50 ? console.log('welcome') : console.log('Go home');

// Array

// const value = ['shankar', 234, 'Pan', null, undefined, [34, 45], {}, () => {}];

// console.log(value);

// const fruits = ['banana', 'apple', 'orange', 'mango']; // it will only compare the first number

// const value = fruits.length;

// const value = fruits[0];
// console.log(value);

// fruits.push('Watermelon');
// fruits.unshift('Watermelon');

// fruits.splice(2, 0, 'watermelon'); adding items

// deleting item form array

// const val = fruits.pop();
// const val = fruits.shift();

// const val = fruits.splice(2, 2);

// const val = fruits[2];
// fruits[2] = 'testing';

// const val = fruits.slice(2, 3);

// const val = fruits.toString();

// const val = fruits.toString().split(',');
// const val = fruits.indexOf('banana');

// const val = fruits.includes('mango');

// const val = fruits.join(',');

// const val = fruits.sort((a, b) => b - a); //Bubble sorting
// fruits.reverse();
// console.log(fruits);

// LOOPS

// FOR, DO WHILE, WHILE

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// While loop

// while(condition){}

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Do while loop

// let i = 0;

// do {
//   // codes

//   console.log(i);
//   i++;
// } while (i < 10);
// for (let i = 0; i < 100; i++) {
//   if (i === 10) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

// JAVASCRIPT SPECIFIC ARRAYS LOOPS

// 1. for/of

// const fruits = ['banana', 'apple', 'orange', 'mango'];
// console.log(fruits);

// const upperFruits = [];
// for (let item of fruits) {
//   upperFruits.push(item.toUpperCase());
//   //   console.log(item);
// }
// console.log(upperFruits);
// console.log(fruits);

// For Loop

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// FOR EACH

// fruits.forEach((item, index) => {
//   console.log(index, item);
// });

// const newData = fruits.forEach((item, index) => {
//   console.log(index, item);
// });
// console.log(newData);

// // MAP Loop in Array
// The map() method of array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// const newData = fruits.map((item, index) => {
//   //   console.log(item, index);
//   //   return 'Shankar';
//   //   return 'SKU-' + item.toUpperCase();
//   if (item.includes('n')) {
//     return item;
//   }
// });

// Filter Array: The filter method of Iterator instances returns a new iterator helper that yields only those elements of the iterator for which the provided callback function returns true.
// const newData = fruits.filter((item, index) => {
//   return item.includes('n');

//   console.log(item, index);
//   if (item.includes('n')) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const newData = fruits.filter((item, index) => item.includes('n'));
// console.log(newData);

// Reduce Array : reduce() method of array instances execute a user supplied "reducer" callback function on each element of array, in order, passing in the return value from the calculation on the preceding element. The final result of running across all elements of the array is a single value.

// const array = [2, 3, 4, 56, 78, 5678, 980];

// const finalArray = array.reduce((acc, curr) => acc + curr, 0);

// console.log(finalArray);

// Every loop : The every method of  Array instances tests whether all elements in the array pass the test  implemented by the provided function. It returns a boolean value.

// const fruits = ['banana', 'apple', 'orange', 'mango'];
// console.log(fruits);

// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes('a');
// });

// console.log(result);

// const array = [2, 3, 4, 56, 78, 5678, 980];

// const result = array.every((num) => {
//   return num > 1;
// });
// console.log(result);

// const array = [2, 3, 4, 56, 78, 5678, 980];

// // const result = array.includes('20');

// // const result = array.find((item) => item === 4);

// const result = array.indexOf(56);
// console.log(result);

// creation of  new array in javascript

// const Arg = Array(10).fill('Shankar');

// console.log(Arg);
