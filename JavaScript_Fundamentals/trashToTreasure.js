function smartGarbage(trash, bins) {
  let binsKeys = Object.keys(bins);
  for (let index = 0; index < binsKeys.length; index++) {
    const binsKey = binsKeys[index];
    if (binsKey === trash) {
      bins[Object.keys(bins)[index]]++;
    }  
  } 
    console.log(bins);
}
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

smartGarbage('recycling', { recycling: 4, waist: 2, compost: 5 });
let armin = {
  a : 1,
  b : 2,
  c : "a"
}
console.log(armin[Object.keys(armin)[0]]);