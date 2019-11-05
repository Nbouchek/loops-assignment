const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Number is greater than 0.7");
}

const array = [1, 4, 6, 7, 21];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

for (const iterator of array) {
  console.log(iterator);
}

for (let index = array.length - 1; index >= 0; index--) {
  console.log(array[index]);
}

const nacerRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (
  (randomNumber > 0.7 && nacerRandomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  nacerRandomNumber <= 0.2
) {
    alert("Nacer alert!");
}
