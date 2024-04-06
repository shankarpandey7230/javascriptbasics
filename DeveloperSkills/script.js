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
