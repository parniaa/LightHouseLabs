// const args = process.argv;
// let result = args.slice(2,4);
// console.log(Number(result[0]) + Number(result[1]));

const args = process.argv;
let inputArray = args.slice(2,args.length);
let newArray = [];
for (let i = inputArray.length - 1; i >= 0; i--) {
  newArray.push(inputArray[i]);
}
newArray.forEach(element => {
  console.log(element);
});
  


