// Javascript is a high  level, object-oriented, multi-paradigm programming language.
// 1. high level: we do not have to worry about complex stuff like memory management
// 2. object-oriented=based on for storing most kinds of data
// 3.multi-paradigm: can use different style fo programming such as imperative and declarative styles

// JAvascript ROle: HTML responsible for content CSS responsible for presentation of the webpage
// Javascript: real programming language to add dynamic effects in web application

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
// let x = 10 + 5; //15
// x += 10;
// x*= 4;
// x++;
// x--;
// console.log(x);

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

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
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

// DATE  OBJECT: represent a single moment in time in a platform-independent format. It encapsulates an integral number that represents milliseconds since the midnight at the beginning of Jan 1, 1970 UTC(the epoch)

// const today = Date();

// console.log(typeof today); //string

// console.log(today);

// const today = new Date();

// console.log(typeof today); // object

// console.log(today);

// const today = Date.now();
// console.log(today); // will return timestamp which is the number of milliseconds elapsed since the epoch which is defined as the midnight at the beginning of JAN 1 , 1970 UTC.

// const today = new Date('2019-9-29');

// const data = today.getDate();

// getDay is zero based so for sunday it will display  0 whereas for saturday it will show 6;
// const data = today.getDay();
// const data = today.getFullYear();
// const data = today.getMonth(); // this method of Date instances returns the month for this date  according to local time, as a zero-based value where zero indicates the first month of the year)

// const data = today.getMinutes();
// const data = today.getMilliseconds();
// const data = today.toLocaleDateString(); // returns a string with a language-sensitive representation of the date portion  of this date in the local timezone.
// const data = today.toLocaleString(); // returns a string with a language-sensitive representation of this date in local timezone.
// const data = today.toLocaleTimeString(); // returns a string with a languages sensitive representation of the time portion of this date in local timezone.
// const data = today.toISOString(); // returns a string representing this date in date time string format a simplified format based on ISO 8601

// today.setDate(today.getDate() + 10); // object

// const data = today.setDate(today.getDate() + 10); // number
// console.log(data.toLocaleString());

// console.log(typeof data);number
// console.log(typeof today); object

// console.log(today.getTime());

// Functions: are one of the fundamental building blocks in Javascript
// function declarations consists of function keyword followed by the name offunction , list of parameters of the function,enclosed in paraentheses and seperated by commas, statements that define the function,enclosed in curly braces

// whenever function is declared javascript will put it in global scope
// function sayHi(name, address, code) {
//   const message =
//     // 'Hello   ' +
//     // name +
//     // '  nice start for your software developer journey from  ' +
//     // address +
//     // 'postal address :' +
//     // code;

//     `Hello ${name} nice to start for your software developer journey form ${address} and ${code}`;
//   console.log(message);
// }
// sayHi('Shankar', 'Tasmania', 7248);
// sayHi('Hari', 'sydney', 2220);

// ES6 arrowfunction: is a compact alternative to a traditional funciton expression with some semantic differences and deliberate limitaions in usage.
// 1. They don't have their own bindings to this, arguments aor super and should not be used as methods,
// 2. can not be used as constructors, calling them with new will throw error(Type Error).Error
// 3. They can not use yield within their body and cannot be created as generator function

// const sayHi = (name, address, code) => {
//   const message = `Hello ${name} nice to start for your software developer journey form ${address} and ${code}`;
//   console.log(message);
// };

// sayHi('shankar', 'Tasmania', 7248);

// const Shankar = 'a software developer who likes to code and grow every day';
// const Gyanendra = 'from Tasmania love to code and learn new things';
// const Shekhar = 'Practing everyday';

// array will allow to list individual data

// object will be used to store one data with multiple data

// const person1 = {
//   name: 'Shankar',
//   location: 'Australia',
//   interest: 'loves to code and learn and grow day by day',
// };
// const person2 = {
//   name: 'sam',
//   name: 'sam',
//   location: 'UK',
// };

// console.log(person1.name, person2.name);
// const userList = [
//     {
//       name: 'prem',
//       location: 'Sydeny',
//       career: 'founder of DC',
//       interest: 'loves coding and teaching others',
//     },
//     {
//       name: 'Sam',
//       location: 'US',
//     },
//     { name: 'William' },
//   ];

//   // console.log(userList);

//   const career = ({ career, interest }) => {
//     //   console.log(cr);
//     return `${career} and he ${interest}`;
//   };

//   const personBio = ({ name, location = 'na', ...rest }) => {
//     console.log(rest);
//     //   console.log(name, location);
//     //   Destructuring :JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//     //   const { name, location } = person;
//     let str = `${name} is from ${location} and likes to code. `;

//     if (rest.career) {
//       str += career(rest);
//     }
//     return str;
//     //   console.log('check ');
//   };
//   // const data = personBio();
//   // console.log(userList[2]);
//   // console.log(data);

//   userList.forEach((item, i) => {
//     //   console.log(item, i);
//     const data = personBio(item); //object data type
//     console.log(data);
//   });

// JS Error Handling: try catch statement marks a block of statements to try and specifies one or more responses should an exception be thrown, if an exception is thrown , the try catch statement catches it

// console.log(first);

// try {
//   // codewitherro
//   //   console.log(first); // once it catches error it will not execute the code after this line
//   throw new Error('hacked');
// } catch (error) {
//   console.log(error); //notification to engineers
//   if (error.message === 'hacked') {
//     console.log('emergency alert to engineers');
//   }
// } finally {
//   console.log('this block of code will always run');
// }

// console.log('this works');
