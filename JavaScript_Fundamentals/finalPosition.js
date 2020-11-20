const moves = ['east',
'east',
'east',
'east',
'west',
'west',
'south'];  

function finalPosition(input){
  let result = [0,0];
  for (const move of moves){
    if (move === "north" ){
      result[0]++;
    } else if (move === "south" ){
      result[0]--;
    } else if (move === "east" ){
      result[1]++;
    } else if (move === "west"){
      result[1]--;
    }
  }
  return result;
}
var t1 = finalPosition(moves);
console.log(t1);