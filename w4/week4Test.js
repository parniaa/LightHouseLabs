///Q00/ Given a collection of game outcome records, determine who all 
// the players are by returning an array of their names.

// const game = [
//   { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
//   { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
//   { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
//   { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
//   { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
//   { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
//   { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
// ];

// const allPlayerNames = function(outcomes) {
//   // IMPLEMENT ME
//   let resultArray = [];
//   outcomes.forEach(outcome => {
//     resultArray.push(outcome["winner"]);
//     resultArray.push(outcome["loser"]);
//   });
//   const uniqueSet = new Set(resultArray);
//   const backToArray = [...uniqueSet];
//   return backToArray;
// };
// console.log(allPlayerNames(game));

///Q02//Implement a function which can run a given function after a delay.

// const doShortly = function(callback, delay, data) {
//   // IMPLEMENT ME
//   return setTimeout(() => {
//     callback(data);
//   }, 2000);
// };
// console.log(doShortly(
//   () => {console.log("h")},
  
// ));

///Q02//////

const request = require('request');

const fetchDataForUser = function(url, username, callback) {
  // IMPLEMENT ME

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      const result = JSON.parse(body).users[username];
      callback(null, result);
    }
  });
};
const URL = 'https://gist.githubusercontent.com/kvirani/f7d65576cc1331da1c98d5cad4f82a69/raw/4baad7566f0b6cd6f651c5d3558a015e226428b5/data.json';


fetchDataForUser(URL, 'mr_robot', (err, data) => {
  if (err) {
    console.log("It didn't work!" , err);
    return;
  }
  console.log('It worked! Returned IP:' , data);
});



////Q03////
const sumFileData = function(filePath1, filePath2, callback) {
  // IMPLEMENT ME
  fs.readFile(filePath1, 'utf8', (err, data1) => {
    if (err) {
      callback(err, null);
      return;
    } else {  
      fs.readFile(filePath2, 'utf8', (err, data2) => {
        if (err) {
          callback(err, null);
          return;
        } else {
          return data1 + data2;
          
        }
      });
    }
  });
};

const sumFileData = function(filePath1, filePath2, callback) {
  // IMPLEMENT ME
  let sum = 0;
  fs.readFile(filePath1, 'utf8', (err, data1) => {
    if (err) {
      callback(err, null);
    }
    sum = data1;
  });
  fs.readFile(filePath2, 'utf8', (err, data2) => {
    if (err) {
      callback(err, null);
    }
    sum += data2;
  });
  return sum;
};