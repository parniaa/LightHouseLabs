// moves heeey to the start of the line by using \r
// process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r/');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1700);
setTimeout(() => {
  process.stdout.write('\r|');
}, 1900);