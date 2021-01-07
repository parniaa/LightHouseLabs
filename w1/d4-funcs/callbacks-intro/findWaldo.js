const findWaldo = function(names, found) {
  // for (let i = 0; i < names.length; i++) {
  //   let name = names[i];
  //   if (name === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }
  let i = 0;
  names.forEach(name =>{

    if (name === "Waldo"){
      found(i);
    }
    i++; 
  });
};

const actionWhenFound = function(index) {

  console.log("Found Waldo at index " + index);
};



findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// Modify the actionWhenFound function to let it receive and use the index


// Modify the findWaldo function so that it passes the index array to the callback: "Found Waldo at index 2!".

