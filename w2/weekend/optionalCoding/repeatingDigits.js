//return true if digits contain only one repeating digits:
const repeatingDigits = function(digits) {
  let digitArray =  digits.split('');
  let repeatFlag = 0;
  let results = {};
  digitArray.forEach(element => {
    if (results[element]) {
      results[element] += 1;
    } else {
      results[element] = 1;
    }
  });
  for (const key in results) {
    if (results[key] > 1) {
      repeatFlag++;
    } else {
      repeatFlag--;
    }
  }
  if (repeatFlag) {
    return true;
  } else {
    return false;
  }
};
console.log(repeatingDigits("77777777"));
