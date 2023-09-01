/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */
const color = "red";

switch (color) {
  case "red":
    console.log(`[Question #1]:${color} passionate`);
    break;

  case "blue":
    console.log(`[Question #1]:${color} calm`);
    break;

  case "otherColor":
    console.log(`[Question #1]:${color} neutral`);
    break;
}
/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thrusday":
  case "Friday":
    console.log(`[Question #2]: ${day} is woorking day`);
    break;

  case "Saturday":
  case "Sunday":
    console.log(`[Question #2]: ${day} is weekend`);
    break;
}

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */
const score = 100;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;

  case score >= 80:
    grade = "B";
    break;

  case score >= 70:
    grade = "C";
    break;

  case score >= 60:
    grade = "D";
    break;

  default:
    grade = "F";
}
console.log(`[Question 3]: ${grade}`);
/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */
const fruit = "blueberries";
let result;

switch (fruit) {
  case "strawberries":
  case "blueberries":
  case "raspberries":
    result = "berry";
    break;

  default:
    result = "Not a berry";
    break;
}
console.log("[Question #4]:", result);

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */
const month = "March";
let quarterOftheYear;

switch (month) {
  case "January":
  case "February":
  case "March":
    quarterOftheYear = "quarterOftheYear1";
    break;

  case "April":
  case "May":
  case "June":
    quarterOftheYear = "quarterOftheYear2";
    break;

  case "July":
  case "August":
  case "September":
    quarterOftheYear = "quarterOftheYear3";
    break;

  case "October":
  case "November":
  case "December":
    quarterOftheYear = "quarterOftheYear4";
    break;
}
console.log("[Question #5]:", quarterOftheYear);
/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */
const number = 9;

switch (number) {
  case 1:
  case 2:
  case 3:
    console.log("[Question #6]:", "Small");

  case 4:
  case 5:
  case 6:
    console.log("[Question #6]:", "Medium");

  case 7:
  case 8:
  case 9:
    console.log("[Question #6]:", "Large");
}

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */
const pet = "dog";
let petType;

switch (pet) {
  case "dog":
    petType = "Canine";
    break;

  case "cat":
    petType = "Feline";
    break;

  default:
    petType = "UnKnown";
    break;
}

console.log("[Question #7]:", petType);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */
const transportMode = "car";
let velocity;

switch (transportMode) {
  case "plane":
    velocity = "fast";
    break;

  case "car":
    velocity = "medium";
    break;

  case "bicycle":
    velocity = "slow";
    break;
}

console.log("[Question #8]:", velocity);

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */

const direction = "S";
let Name;

switch (direction) {
  case "N":
    Name = "North";
    break;

  case "S":
    Name = "South";
    break;
}

console.log("[Question #9]:", Name);

/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */

const typeOfdrink = "H20";
let drink;

switch (typeOfdrink) {
  case "H20":
    drink = "water";
    break;

  case "C8H10N4O2":
    drink = "coffe";
    break;

  default:
    drink = "Unknown";
    break;
}
console.log("[Question #8]:", drink);
