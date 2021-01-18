const checkPalindrome = (inputString) => {
  let stringArray =  inputString.split('');
  let reverseArray = stringArray;
  let arrayLength = stringArray.length;
  for (let i = 0; i < arrayLength; i++) {
    if (stringArray[i] === reverseArray[arrayLength - 1]) {
      arrayLength --;
      console.log(reverseArray[arrayLength]);
        
    } else {
      return false;
    }
  }
  return true;
};
