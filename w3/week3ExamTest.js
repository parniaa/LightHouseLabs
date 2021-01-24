////00//CONVERT OBJECT TO array of key and pair values:
// ******
// let obj = { a: 1, b: 2, c: 3 };
// let insideArray = [];
// let mainArray = []

// for (const key in obj) {
// console.log(obj[key]);
//   insideArray.push(key);
//   insideArray.push(obj[key]);
//   mainArray.push(insideArray);
//   insideArray = [];
// }
// console.log(mainArray);
//******* */



//01/////Convert array to object
// let arr = [['a', 1], ['b', 2], ['c', 3]];
// let objResult = {};

// arr.forEach((value) => {
//   // console.log(value , index , array);
//   objResult[value[0]] = value[1];
// });
// console.log(objResult);
////**************** */


//02/// Write a function which will split an array into two arrays based on callBack

// const partition = function(arr, callback) {
//   let leftArray = [];
//   let rightArray = [];
//   let resultArray = [];
//   arr.forEach(element => {
//     if (callback(element)) {
//       leftArray.push(element);
//     } else {
//       rightArray.push(element);
//     }
//   });
//   resultArray.push(leftArray);
//   resultArray.push(rightArray);
//   return resultArray;
// };
// console.log(partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0));

//**************** */

// Given a size in bits convert it to relevant size in B/KB/MB/GB/TB

///04//////

// const filesize = function(bytes) {
//   // IMPLEMENT ME
//   const sizes = ['B', 'kB', 'MB', 'GB', 'TB'];
//   if (bytes === 0) {
//     return `0B`;
//   }
//   const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);
//   if (i === 0) {
//     return `${bytes}${sizes[i]}`;
//   }
//   let tempVal = (bytes / (Math.pow(1000, i))).toFixed(2);
//   return `${parseFloat(tempVal)}${sizes[i]}`;
// };

// console.log(filesize(1250000000));
//******** */



/////depp Array
// const deepArrayToObject = function(arr) {
//   // IMPLEMENT ME
//   let objResult = {};
//   arr.forEach((value) => {
//     if (!Array.isArray(value)) {
//       objResult[value[0]] = value[1];
//     } else {
//       value.forEach((v) => {
//         objResult[v[0]] = v[1];
//       });
//     }
    
//   });
//   return objResult;
// };
// console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]);

const deepArrayToObject = function(arr) {
  // IMPLEMENT ME
  let objResult = {};
  arr.forEach((value) => {
    if (!Array.isArray(value)) {
      objResult[value[0]] = value[1];
    } else {
      deepArrayToObject(value);
    }
  });
  
  return objResult;
};
console.log(deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]));