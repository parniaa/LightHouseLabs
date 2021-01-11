const nameInverter = function(name) {
  const honorific = ["Dr.", "Mr."];
  let trimSplitNameArray = [];
  if (name === undefined) {
    return 'throw Error';
  }
  if (name === '') {
    return '';
  } else {
    name = name.trim();
  }
  trimSplitNameArray = name.trim().split(" ");
  if (honorific.includes(trimSplitNameArray[0]) && trimSplitNameArray.length === 1) {
    name = "";
  }
  if (honorific.includes(trimSplitNameArray[0]) && trimSplitNameArray.length === 2) {
    return name;
  }
  if (name.trim().split(" ").length === 2) {
    name = `${name.split(" ")[1]}, ${name.split(" ")[0]}`;
  }
  if (name.trim().split(" ").length === 3) {
    name = `${name.split(" ")[0]} ${name.split(" ")[2]}, ${name.split(" ")[1]}`;
  }
  return name;
};
console.log(nameInverter("Dr. Armin parnia "));
module.exports = nameInverter;
