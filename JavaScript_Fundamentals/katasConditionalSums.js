function conditionalSum(values, condition){
  let sum = 0 ;
  if (values.length() === 0) {
    return 0;
    
  } else {
      for (const value of values) {
      if (condition === "even"){
        if (value % 2 === 0) {
          sum = sum + value ;
          return sum;
        }
      }else {
        if (value % 3 === 0){
          sum = sume + value ;
          return sum;
        }
      }
    } 
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));