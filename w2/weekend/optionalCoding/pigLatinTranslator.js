// const args = process.argv;
// console.log(args[2]);

const args = process.argv;
let inputArray = args.slice(2,args.length);
let outPutArray = []
inputArray.forEach(element => {
  let tempword = element.slice(1, element.length) + element.charAt(0) + "ay";
  outPutArray.push(tempword);
});
console.log(outPutArray.join(' '));
