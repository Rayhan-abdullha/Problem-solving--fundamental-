// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).

// Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

GOOD LUCK �
*/

// Problem Solved
const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 95;
const heightJohn = 1.95;

const marksBMI = massMarks / heightMarks ** 2;
const johnBMI = massJohn / heightJohn ** 2;

const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI); // true

// Codding Challange: 2#
/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/

// Solved

if (marksBMI > johnBMI) {
  console.log(`MarksBMI (${marksBMI}) is Higher than JohnBMI (${johnBMI})`);
} else {
  console.log(`MarksBMI (${marksBMI}) is smaller than JohnBMI (${johnBMI})`);
}

// Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 
*/

// solved

let dolPhinsAvgScore = (97 + 112 + 101) / 3;
let koalasAvgScore = (109 + 95 + 106) / 3;

console.log(dolPhinsAvgScore);
console.log(koalasAvgScore);

if (dolPhinsAvgScore > koalasAvgScore && dolPhinsAvgScore > 100) {
  console.log(`dolpins wins the tropy ${dolPhinsAvgScore}`);
} else if (dolPhinsAvgScore < koalasAvgScore && koalasAvgScore > 100) {
  console.log(`koalas wins the tropy ${koalasAvgScore}`);
} else if (
  dolPhinsAvgScore === koalasAvgScore &&
  dolPhinsAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log("they both are winners");
} else {
  console.log("no one wins the tropy");
}

// ====== Coding Challenge =====
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK 
*/

// Solved

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins is winner (${avgDolphins} Vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas is winner (${avgKoalas} Vs ${avgDolphins})`);
  } else {
    console.log(`No team winner`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);

// assign another value
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

// ====== Coding Challenge =====
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK 
*/

// Solving
const calcTip = function (bill) {
  const calcTips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return calcTips;
};

const bill = [125, 555, 44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(bill, tips);

// ====== Coding Challenge ======== //
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK 
*/

// Solving
let markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI.toFixed(2);
  },
};
let johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI.toFixed(2);
  },
};

const mark = markMiller.calcBMI();
const john = johnSmith.calcBMI();
const result =
  mark > john
    ? `${markMiller.fullName} BMI ${markMiller.BMI} is greater than ${johnSmith.BMI}`
    : `${johnSmith.fullName} BMI ${johnSmith.BMI} is greater than ${markMiller.BMI}`;
console.log(result);

// =======Coding Challenge========= #4
/*
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/

// Solved
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips1 = [];
let total = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300
    ? bill * 0.15
    : bill < 50
    ? bill * 0
    : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips1.push(tip);
  total.push(tip + bills[i]);
}
console.log(total);

// calcAverage
function calcAverage(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    // console.log(element);
    sum += element;
  }
  return sum / arr.length;
}

const totalBill = calcAverage(total);
console.log(totalBill); // 273.81

// ==========Codding Challenge==========//

/*
The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations
*/

// Solved
const percentageOfWorld = function (worldPopu) {
  const parentPopulation = (worldPopu / 7800) * 100;
  return parentPopulation.toFixed(1);
};
// extra added
let population = [100, 500, 100];
let i = 0;

while (i < population.length) {
  const populations = percentageOfWorld(population[i]);
  console.log(populations + " % ");
  i++;
}
