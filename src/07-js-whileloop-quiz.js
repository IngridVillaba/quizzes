/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */
let i,
  sum = 0;
i = 1;
while (i <= 10) {
  sum = sum + i;

  i++;
}
console.log("[Question #1]:", sum);

/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */
let n = 5;
let stringNumbers = "";

while (n <= 15) {
  stringNumbers += n;
  if (n < 15) {
    stringNumbers += ",";
  }

  n++;
}
console.log("[Question #2]:", stringNumbers);

/**
0 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
let number3 = [];
let h = 10;
while (h <= 30) {
  if (h % 2 === 0) {
    console.log("[Question #3]:", h);
  }
  h++;
}

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
let numberPower = [];
j = 0;
while (j ** 2 <= 1000) {
  j++;
  numberPower = j;
}

console.log("[Question #4]:", numberPower);
/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */
let string = "HelloWorld";
let reversedString = "";
let index = string.length - 1;

while (index >= 0) {
  reversedString += string.charAt(index);
  index--;
}
console.log("[Question #5]: ", reversedString);

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
let fruit = "banana";
let count1 = 0;
let index2 = 0;

while (index2 < fruit.length) {
  if (fruit.charAt(index2) === "a") {
    count1++;
  }
  index2++;
}
console.log("[Question #6]: ", count1);

/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */
let number7 = 5;
let factorial = 1;

while (number7 > 0) {
  factorial *= number7;
  number7--;
}
console.log("[Question #7]: ", factorial);

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */

let number8 = 100;

while (number8 >= 80) {
  console.log("[Question #8]: ", number8);
  number8--;
}

/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
function findGCD(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Numbers for which we want to find the GCD
let number1 = 56;
let number6 = 98;

// Calculate and print the GCD
let gcd = findGCD(number1, number6);

console.log("[Question #9]: ", gcd);

/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */
let odd = 1;
let sum2 = 0;

while (odd <= 50) {
  sum2 += odd;
  odd += 2;
}
console.log("[Question #10]: ", sum2);
