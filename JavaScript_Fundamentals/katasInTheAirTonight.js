const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  let cleanCount = 0;
  const ITISCLEAN = "Clean";
  const POLLUTED = "Polluted";
  for (const sample of samples) {
    if (sample === "clean") {
      cleanCount++;
    } else {
      dirtyCount++;
    }  
  }
  if ((dirtyCount / samples.length) > threshold) {
    return POLLUTED;
  } else {
    return ITISCLEAN;
  }  
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
