function sumLargestNumbers(arr) {
  
  let max = arr.sort((a, b) => a - b);
  let a = [max[max.length-1], max[max.length-2] ]; 
  return a[0] + a[1];
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));