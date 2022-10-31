/* //Arrays it is a list
const arr = [3, 6, 9];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); //0 index 

const arr2 = [true, false, "yay!", [3, 6, 7], null, 9];
//console.log(arr2.length);

arr2.unshift("pushed");
arr2.pop();
console.log(arr2);
*/

const numbersArr = [1, 2, 3, 4, 5];

/* numbersArr.forEach((number) => {
  //iterate through the array and run function on each one.
  //pass each element into the function as a parameter
  console.log(number * 2);
  console.log(numbersArr);
}); */

const newArr = numbersArr.map((number) => 
  return number * 2;
);

console.log(newArr);
