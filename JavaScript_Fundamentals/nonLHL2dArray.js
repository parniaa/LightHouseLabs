// var wordSearch = [
//  ["A", "B", "C"],
//  ["H", "I", "I"],    
//  ["D", "E", "F"],
// ];
// var words = ["ABC", "FED", "CID"];
// var word = "ABC";
// function includesWordVertically(matrix, word) {

//     for (let j = 0 ; j < matrix[0].length ; j++) {

//         let verticalWord = '';

//         for (let i = 0 ; i < matrix.length ; i++) {
//             verticalWord += matrix[i][j];
//         }

//         if ((verticalWord.includes(word)) ||
//             (verticalWord.split('').reverse().join('').includes(word)))
//         {
//             return verticalWord;
//         }

//     }

//     return false;

// }
// console.log(includesWordVertically(wordSearch,word));

let arr = [
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
];
let word = "abc";

function sumOfFilter(arr,word) {
    return arr // Return the character list,
      .flat(1) // converted into a 1D array,
      .filter( e => !word.includes(e)) // filtered to elements not in the word,
      .join(''); // joined together in a string.
}

console.log(sumOfFilter(arr,"fed"))
let test = arr.flat(0).filter( e => !word.includes(e));
console.log(test);