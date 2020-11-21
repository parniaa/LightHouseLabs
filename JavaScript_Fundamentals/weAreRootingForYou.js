const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 5,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 25,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 100,
    plumpness: 3
  }
];

const metric = 'redness';
function judgeVegetable (vegetables, metric) {
  let sRed = 0;
  let tracker = [];
  
  for (let index = 0; index < vegetables.length; index++) {
    let mine = Object.keys([index]);
    if (mine[1] === metric){
    const vegetable = vegetables[index].redness;
    if (vegetable > sRed) {
      sRed = vegetable;
      tracker.push(index);
    }
  }
  }
  let result = vegetables[(tracker.length-1)].submitter;
  return result;
  }

console.log(judgeVegetable(vegetables, metric));
