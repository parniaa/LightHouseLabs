const camelCase = function(input) {
  let dataArrays = input.split("");
  // console.log(dataArrays);
  let finalResult =[];
  for (let i = 0; i < dataArrays.length; i++) {
    let data = dataArrays[i];
    if (data ===" ") {
      
      dataArrays[i+1] = dataArrays[i+1].toUpperCase();
      dataArrays.splice(i, 1);
      
    }
  }

    console.log(dataArrays);
  
};

console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
