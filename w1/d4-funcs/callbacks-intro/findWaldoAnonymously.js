// const findWaldo = function(names, found) {
//   let i = 0;
//   names.forEach(name =>{
//     if (name === "Waldo") {
//       found(i);
//     }
//     i++;
//   });
// };

const findWaldo = function(names, found) {
  names.forEach((name, index) => { 
    if (name === "Waldo") {
      found(index); //execute callback
    }
  });
};

const actionWhenFound = function(index) {

  console.log("Found Waldo at index " + index);
};



findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {

  console.log("Found Waldo at index " + index);
});

