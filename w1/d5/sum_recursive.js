const recursiveSum = function (input) {
  if (input === 0) {
    return 0;
    
  }
  return input + recursiveSum(input - 1);
  
};
console.log(recursiveSum(4));
