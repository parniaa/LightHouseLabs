const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027
  }
};

person["pNumber"] = [2222, 22221,4422];
console.log(person.pNumber instanceof Array);
console.log(Object.length(person));