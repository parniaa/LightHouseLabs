const sentence = "hello there from lighthouse labs";
let i = 0;
let sentenceArray = sentence.split("");
console.log(sentenceArray);
setTimeout(function run() {
  if (i < sentenceArray.length) {
    // console.log(sentenceArray[i]);
    process.stdout.write(sentenceArray[i]);
    i++;
    setTimeout(run, 150);
  }
}, 150);