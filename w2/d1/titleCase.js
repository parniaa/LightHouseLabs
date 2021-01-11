const titleCase = function(text) {
  if (text === undefined) { return null}
  let textArrays = text.trim().split(" ");
  let resultArray = [];
  console.log(textArrays);
  for (let textArray of textArrays) {
    resultArray.push(textArray.charAt(0).toUpperCase() + textArray.slice(1).toLowerCase());
  }
  return resultArray.join(' ');

};
console.log(titleCase());