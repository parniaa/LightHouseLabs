function numberOfVowels(data) {
  let dataArrays = data.split("");
  let vowelsCounter = 0 ;
  for (const dataArray of dataArrays) {
    if (dataArray === "a" || dataArray === "e" || dataArray === "i" || dataArray === "o" || dataArray === "u")
      vowelsCounter++;
  }
  return vowelsCounter; 
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));