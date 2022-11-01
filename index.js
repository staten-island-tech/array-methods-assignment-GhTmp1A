const people = [
  { name: "John Doe", jnumbers: [1, 2, 4, 6], factor: "Unknown" },
  { name: "Jonathan Doe", jnumbers: [3, 5, 8, 7], factor: "Known, testing?" },
];

people.forEach((people) => {
  console.log(people.name);
});

people.forEach((people) => {
  console.log(people.factor);
});

people.forEach((people) => {
  console.log();
});

people.forEach((people) => {
  console.log(people.name);
  console.log(people.factor);
  people.jnumbers.forEach((number) => {
    console.log(number);
  });
});
