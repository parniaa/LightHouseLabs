// moves heeey to the start of the line by using \r
// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const sentence = "|/-\\|";
let i = 0;
let sentenceArray = sentence.split("");
console.log(sentenceArray);
setTimeout(function run() {
  if (i < sentenceArray.length) {
    // console.log(sentenceArray[i]);
    process.stdout.write(`\r${sentenceArray[i]}`);
    i++;
    setTimeout(run, 200);
  }
}, 250);