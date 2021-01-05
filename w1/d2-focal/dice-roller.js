const args = process.argv;
let result = Number(args.slice(2,3));
let finalresult = [];

const diceRoller = function(input) {
  for (let i = 0; i < input; i++) {
    let rand = Math.floor(Math.random() * 6 + 1);
    finalresult[i] = rand;
  }
  return finalresult;
};

let jointArray = diceRoller(result).join(", ");
console.log(`Rolled ${result} dice: ${jointArray}`);