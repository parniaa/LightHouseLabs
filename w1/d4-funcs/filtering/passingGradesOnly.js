const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
//arrow function
const passingGrades = grades.filter( grade => grade > 70);
console.log("Passing grades are: ", passingGrades);

// Not arrow function
// const passingGrades = grades.filter(function(grade) {
//   return (grade > 70);
// });