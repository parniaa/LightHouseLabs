class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }
  get numberOfSubordinates() {
    return this.subordinates.length;
  }
  get numberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }

    return numberOfPeople;
  }
  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
  employeesThatMakeOver(amount) {

    let employees = []; // 1

    if (this.salary > amount) {
      employees.push(this); // 2
    }

    for (const subordinate of this.subordinates) {
      const subordinatesThatMakeOver = subordinate.employeesThatMakeOver(amount); // 3
      employees = employees.concat(subordinatesThatMakeOver);
    }

    return employees;
  }
  get totalEmployees() {

    let totalEmployees = 0; // 1

    // Use depth first traversal to calculate the total employees

    return totalEmployees;

  }

}
const ada = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

//1. Who is someone's boss?
console.log(`craig's boss is: ${craig.boss.name}`);
console.log(`arvinder's boss is: ${arvinder.boss.name}`);
console.log(`angela's boss is: ${angela.boss.name}`);
console.log(`phil's boss is: ${phil.boss.name}`);

//2. Number of subordinates
console.log(ada.numberOfSubordinates);

//3. Levels to the CEO
console.log(phil.numberOfPeopleToCEO);

//4. Same Boss Or Not
console.log(phil.hasSameBoss(ada));

//5. emp that makes more than
let wealthyEmployees = ada.employeesThatMakeOver(418401);
console.log(wealthyEmployees[0]);

//6. Total num of emp
console.log(ada.totalEmployees);



