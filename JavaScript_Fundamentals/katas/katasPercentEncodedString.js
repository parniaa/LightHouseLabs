const urlEncode = function(text) {
  let results = text.split('');
    // console.log(results.length);
  for (let index = 0; index < results.length; index++) {
    var result = results[index];
    if (result === ' ') {
      results[index] = "%20";
    } else {
      results[index] = result;
    }
  }
  if (results[0] === "%20") {
    results[0] = '';
  }
  if (results[(results.length)-1] === "%20") {
    results[(results.length)-1] = '';
  }
  var finalResults = results.join('');  
  return finalResults;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
