const repeatNumbers = function(data) {
  let element = 0;
  let result = "";
  for (let i = 0; i < data.length; i++) {
    element = data[i];
    for (let j = 0; j < element[1]; j++) {
      let a = element[0]
      result += a;  
    }
    console.log(result);
  }

  
};

// console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
// console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
