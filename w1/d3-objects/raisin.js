const raisinAlarm = function(cookie) {
  // Put your solution here
  let flag = true;
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      flag = false;
    }
  }
  if (flag) {
    return "All good";
  } else {
    return "Raising Alert!";
  }

};
// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let output = [];
  for (const cookie of cookies) {
    
    raisinAlarm(cookie);
  }
};
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));