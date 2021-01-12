// You'll be implementing a function called transpose, 
// which will receive an array of arrays as its only parameter. 
// Your function must return a new array with the columns and rows switched. 
// Note that we've included a printMatrix function, 
// which nicely prints out your 2D arrays.

// const transpose = function(matrix) {
//   if (matrix.length < 2) {
//     let result = [];
//     let tempValue = 0;
//     for (let i = 0; i < matrix[0].length; i++) {
//       result[i] = [];
//       result[i][0] = matrix[0][i];
//     }
//     return result;
//   }
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < i; j++) {
//       const temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
    
//   }
//   return matrix;
// };

//better solution
const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
}


  printMatrix(transpose([
    [1, 1],
    [2, 2],

  ]));

printMatrix(transpose([
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));
  
printMatrix(transpose([
[1, 2, 3, 4, 5, 6, 7]
]));


