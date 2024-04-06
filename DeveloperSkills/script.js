// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of temperatures of one day,

// calculate the temperature amplitude.
//  Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1. Understanding the problem
// temp amplitude : difference between highest and lowest temp
// how to computer max and min temp?
// whats a as sensor error and what to do

// 2. Breaking up into small problems
// How to ignore errors?

// find max and min value in temp array
// subtract min from max (amplitude ) and return it

// const calcTempAmplitude = function (temps) {
//   let maxtemp = temps[0];
//   let mintemp = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > maxtemp) {
//       maxtemp = curTemp;
//     }
//     if (curTemp < mintemp) {
//       mintemp = curTemp;
//     }
//   }
//   console.log(maxtemp, mintemp);
//   return maxtemp - mintemp;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1. Understanding problem: with 2 arrrays implementation of functionality twice or not
// 2. Break up into sub-problems
// How to merge two arrays
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// Debugging with the Console and Breakpoints

// const Kelvinmeasure = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees Celsius:')), // prompt function always returns string
//   };
//   // console.log(measurement);
//   // console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(Kelvinmeasure());

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// 1. Understanding problem:
// Array transformed to string seperated by ...;
// Whati sthedays: array index +1

// 2. Breaking into sub problems
// Transformation of arrays into strings
// Strings needs to contain day (index+1);
// Add ... between elements and start and end of string
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// // console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

// const printForecast = (arr) => {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}C in ${i + 1} days ...`;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);
