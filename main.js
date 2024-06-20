// Javascript MAP function //

const people = [
  { name: "kamal", age: 20, job: "developer", salary: 200 },
  { name: "jamal", age: 30, job: "intern", salary: 100 },
  { name: "johny", age: 32, job: "dev", salary: 400 },
  { name: "sharif", age: 25, job: "developer", salary: 500 },
];

const jobFind = people.map((person) => {
  return person.job;
});

console.log(jobFind);

// filter function //

const findDeveloper = people.filter((person) => person.age >= 30);

console.log(findDeveloper);

// let's calculate the daily cost of this company //

const dailyCost = people.reduce((total, person) => {
  const { salary } = person;
  //let total = total + salary
  total = total + salary;
  return total;
}, 0);

console.log(dailyCost);
