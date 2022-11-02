const people = [
  { name: "John Doe", jnumbers: [1, 2, 4, 6], found: "no", factor: "Unknown" },
  {
    name: "Jonathan Doe",
    jnumbers: [3, 5, 7, 8],
    found: "yes",
    factor: "Known, testing?",
  },
  {
    name: "Johnson Doe",
    jnumbers: [9, 11, 13, 15],
    found: "no",
    factor: "Still testing",
  },
  {
    name: "Jack Doe",
    jnumbers: [10, 12, 14, 16],
    found: "yes",
    factor: "Done. Proceeding.",
  },
];

people.forEach((name) => {
  console.log(name.name);
});

people.forEach((people) => {
  console.log(people.name);
  people.jnumbers.forEach((number) => {
    console.log(number);
  });
  console.log(people.found);
  console.log(people.factor);
});

people
  .filter((filterfound) => filterfound.found === "yes")
  .forEach((foundpeople) => {
    console.log(foundpeople.name);
  });
