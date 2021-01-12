const sentence = "hello there from lighthouse labs";
let i = 0;
let sentenceArray = sentence.split("");

// setTimeout(function run() {
//   if (i < sentenceArray.length) {
//     // console.log(sentenceArray[i]);
//     process.stdout.write(sentenceArray[i]);
//     i++;
//     setTimeout(run, 150);
//   }
// }, 150);

console.log('sentenceArray: ', sentenceArray);

console.log('sentenceArray.entries(): ', sentenceArray.entries());

for (const [index, char] of sentenceArray.entries()) {
  console.log('index: ', index);
  console.log('char: ', char);

  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 * index);
}
