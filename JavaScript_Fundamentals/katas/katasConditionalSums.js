function conditionalSum(values, condition){
  let evenSum = 0 ;
  let oddSum = 0 ;
  if (values.length === 0) return 0;
  for (const value of values) { 
    if (value % 2 === 0) {
    evenSum = evenSum + value ;
    }  
    else{
      oddSum = oddSum + value;
    }
  }
  if (condition === "even") {
    return evenSum;
  } else {
    return oddSum;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));