const recursiveSum = function (input) {
  if (input === 10) {
    return 0;
    console.log("g");
  }
  return input + recursiveSum(input + 1);
  console.log("1");
};
console.log(recursiveSum(4));
