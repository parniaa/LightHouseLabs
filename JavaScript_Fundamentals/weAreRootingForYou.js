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
const judgeVegetable = function (vegetables, metric) {
  let name = "";
  let val = 0;
  for(let i = 0; i < vegetables.length; i++){
    if(vegetables[i][metric] > val){
      val = vegetables[i][metric];
      name = vegetables[i].submitter;
    }
  }

  return name;
}

console.log(judgeVegetable(vegetables, metric));
