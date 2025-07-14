Dante Killebrw - CS81

// 1. Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// 2. Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// 3. Get the current date
function getCurrentDate() {
  return new Date().toLocaleDateString();
}

// 4. Find the maximum number in an array
function findMax(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  return Math.max(...numbers);
}

// 5. Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}
