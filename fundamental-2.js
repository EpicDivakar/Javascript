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
 
checkWinner(scoreDolphins, scoreKoalas);   


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

const firstName = 'Jonas';
const jonas = [firstName , 'Schemedtmann ' , 2037 - 1991, 'teacher' , friends];
console.log(jonas);
console.log(jonas.length); 

// Exercise 
const calcAge = function (birthYear){
  return 2037 - birthYear
}
const Years = [1991 , 1873 , 1999 , 2000 , 2001];
//console.log(calcAge(Years)); // We cannot pass an array to a function that expects a single value.
//const ages = [calcAge(Years[0]), calcAge(Years[1]), calcAge(Years[2]), calcAge(Years[3]), calcAge(Years[4])];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
*/

// Array basic Oprations

// add element methods
// push method adds an element to the end of the array //const friends = ['Michel' , ' Diwakar' , 'Jyoti'];
const friends = ['Michel' , 'Diwakar' , 'Peter']
 const newLength = friends.push('Jay');
console.log(friends);
console.log(friends.length);

// to add element to the beginning of the array we use upshift

friends.unshift('John');
console.log(friends);

// Removing elements from the array.

// pop methods removes the last element of the array

friends.pop();
friends.pop();
const popped = friends.pop();
console.log(popped); // It returns the removed element
console.log(friends);

// shift method removes the first element of the array

friends.shift();
console.log(friends);
console.log(friends.indexOf('Diwakar'));
console.log(friends.indexOf('Michel'));
// indexOf methods check the index value of the particular element in the array

friends.push(23);
console.log(friends.includes('Diwakar'));
console.log(friends.includes('Jay'));
console.log(friends.includes('23'));
// includes method checks whether the element is present in the array or not
// It returns true or false
// it checks for the strict equality 

if (friends.includes('Michel')){
  console.log('Yes , you are in the array list')
}
// It is important and wuill be used further in the code

// Objects in Javascript
/*const jonas  = {
        firstName : 'Jonas',
        lastName : 'Schemedtmann',
        age : 2037 - 1991,
        job : 'teacher',
        friends : ['Michel' , "Diwakar" , "Deepak"]

}
// This object has 5 properties 
// Using curly braces is called object literals
// Order of values doesn't matter in the objects as it does in arrays 

// Now's lets talk about to retrive data and how to change data in the objects

// Dot Notation
const jonas  = {
        firstName : 'Jonas',
        lastName : 'Schemedtmann',
        age : 2037 - 1991,
        job : 'teacher',
        friends : ['Michel' , "Diwakar" , "Deepak"]

}
console.log(jonas);
console.log(jonas.lastName);// Dot Notation 
console.log(jonas['lastName']); // Bracket Notation

const nameKey = 'Name';
console.log(jonas['first ' + nameKey]);
console.log(jonas['last' + nameKey]);// This is called dynamic property access 
// This is called dynamic property access
 const interestedIn = prompt ('What do you want to know about Jonas ? Choose between firstName , lastName and friends')
console.log(jonas[interestedIn])

if (jonas[interestedIn]){
  console.log(jonas[interestedIn]);
}else {
  console.log('Wrong request : Choose between firstName , lastName , age , job , and friends')
}

// Now let's see how to add or remove any data from the array
jonas.location = 'Delhi';
jonas['twitter'] = '@asjdfkl';
console.log(jonas);

// Challenge
console.log = (` ${jonas.firstName} has ${jonas.friends.length} friends , and his bestfriend is called ${jonas.friends[0]}`);

const jonas = {
  firstName : 'jonas',
  lastName :'schemedmann',
  birthYear : 1991,
  job : 'teacher',
  friends : ['Michel' , 'Peter' , 'Steven'],
  hasDriversLicense : true,


//   calcAge : function (){
//     console.log(this);
//     return 2037 - this.birthYear;
//   }
// };

// we can put anything inside a object
calcAge : function (){
  this.age = 2037 - this.birthYear;
  return this.age;
}
}

const jonas = {
  firstName : 'jonas',
  lastName :'schemedmann',
  birthYear : 1991,
  job : 'teacher',
  friends : ['Michel' , 'Peter' , 'Steven'],
  hasDriversLicense : true,

  //calcAge: fucntion (birthyear){
  //return 2037 - birthyear;
  //}

 //calcAge : function (){
   //  return 2037 - this.birthYear;
 //}
 calcAge : function(){
  this.age = 2037 - this.birthYear
  return this.age;
 }
}
console.log(jonas.age(1991));//accessed thorugh dot notation
//console.log(jonas[age](1991));// accessed through bracket notation
// Function inside a object is called method.

// Challenge 

const diwakar = {
  firstName : 'Diwakar',
  lastName : 'Verma',
  age : 19,
  prefession : 'engineer',

  getSummary : function(){
    return `My name is ${this.firstName}`
  }
}
console.log(diwakar.getSummary())

//console.log('Lifting weights repetition 1');
//console.log('Lifting weights repetition 1');
//onsole.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 1');
// for loop keep running till the condition is true*/

for (let rep = 5; rep <= 10; rep++){
  console.log("Lifiting weight repetition ${rep}")
}

const days = ['Monday' , 'Tuesday' , 'Wedesday', 'Thursday' , 'friday' , 'wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday']

for (let i = 0 ; i<=days.length; i++){
    console.log(days[i]);
}
const joansArray = [
  'jonas' , 'schemdtman' , 2037 - 1991 , 'teacher' , ['micheal ' , 'peter' , 'steven']
];

for (let i = 0 ; i <=joansArray.length; i++) {
console.log(joansArray [i])
}
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


const fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Total sum:", sum);


