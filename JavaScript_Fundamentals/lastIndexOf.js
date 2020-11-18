function lastIndexOf(arrLists, target){
  let outPut, result = -2 ;
  for (let index = 0; index < arrLists.length; index++) {
    
    const element = arrLists[index];
    if (element === target) {
      outPut = index;
    } else {
      result = -1 ;
    }
    
  }
  if (outPut >= 0) {
    return outPut;
  } else if (arrLists.length<0){
    return -1;
  }else{
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);