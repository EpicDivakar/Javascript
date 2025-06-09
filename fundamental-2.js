/*'use strict';


///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}
// Calling / running / invokind the function
logger();
logger();
logger();
logger();

function fruitProcessor( apples , oranges){
  console.log(apples , oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);

// Function Declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear){
  const age = 2023 - birthYear; // return 2023-birthYear;
  return age;
}

console.log(age1);

//Function Expression

const calcAge2 = function calcAge1(birthYear){
  const age = 2023 - birthYear; // return 2023-birthYear;
  return age;
}
const age1 = calcAge1(1991);
console.log(age1);
// One difference between function declaration and function expression is we can actually call them even before defining them.


// Arrow Function 
// They are faster when runned
// They are shorter to write

 const calAge3 = birthYear => 2037 - birthYear;
 const age3 = calAge3(1991);
 console.log(age3);

 yearsUntilRetirement = (birthYear , firstName) => {
  const age = 2023 - birthYear;
  const retirement= 65- age;
  //return retirement;
  return ``
 }
  console.log(yearsUntilRetirement(1991 , 'Jonas'));
  console.log(yearsUntilRetirement(1991 , 'Jonas'));

  const calcAge = function (birthYear){
    return 2023 - birthYear;
    } 
    const yearsUntilRetirement = function (birthYear , firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
  }
  console.log(yearsUntilRetirement(1991 , 'jonas'));

  // Coding Challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);   */


// Array 
const friend1 = 'Michel';
const friend2 ='Diwakar';
const friend3 = 'jyoti'; 

const friends = ['Michel' , ' Diwakar' , 'Jyoti'];
console.log(friends)

const years = new Array(1991 , 1873 , 3782 );

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
