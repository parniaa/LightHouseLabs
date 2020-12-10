function sumLargestNumbers(arr) {
  let maxNum = arr[0];
  let seconddMaxNum = -1;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element > maxNum){
      seconddMaxNum = maxNum;
      maxNum = arr[index];
    } else if (element > seconddMaxNum){
      seconddMaxNum = arr[index];
    }
  }
  return maxNum + seconddMaxNum;
  
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2, 22, 222, 111, 444, 1111, 1111]));

// let max = arr.sort((a, b) => a - b);
// let a = [max[max.length-1], max[max.length-2] ]; 
// return a[0] + a[1];