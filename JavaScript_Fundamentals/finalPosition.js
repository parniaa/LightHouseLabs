const moves = [  'south',
'south',
'south',
'south',
'south',
'north',
'south'];  

function finalPosition(input){
  let result = [0,0];
  for (const move of moves){
    if (move === "north" ){
      result[1]++;
    } else if (move === "south" ){
      result[1]--;
    } else if (move === "east" ){
      result[0]++;
    } else if (move === "west"){
      result[0]--;
    }
  }
  return result;
}
var t1 = finalPosition(moves);
console.log(t1);