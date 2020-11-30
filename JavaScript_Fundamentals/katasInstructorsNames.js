const instructorWithLongestName = function(instructors) {
  let longestName = 0 ;
  let name = [] ;
  for (const instructor of instructors) {
    if (instructor.name.length > longestName){
      longestName = instructor.name.length;
      name = instructor;
    }
  }
  return name;
};

console.log(instructorWithLongestName([
  {name: "Samuelss", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophiliaww", course: "Web"},
  {name: "Donaldwww", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
