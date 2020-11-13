function range(start, end, step) {
  let output = [];
  if (step <= 0){
    return output;
  }else if (start > end){
    return output;
  }else if ( start === undefined || end === undefined || step === undefined){
    return output;
  }else {
    for (let index = start ; index <= end ; index += step) {
      output.push (index);
    }
    return output;
  }
}
console.log(range(-5, 2, 0));