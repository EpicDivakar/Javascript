/* let js = "amazing";
//if (js ==="amazing")alert("Javascript is fun");//

23+4+6+7;
console.log(23+44+5+6);

console.log("JOnas");
console.log(23); 
console.log(64-86);

//Values and Variables
let firstName = "Jonas"; // Writting small and than capital alphabets while nameing varible is known as camel casing//

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let name = "Jonas"; // This is a varible which is a rese44rved keyword and we  should nt use this as a varible name//
let PI = 3.1415;//This is a constant varible and we shoulkd not change this value //

// Our variable name should be discriptive it should not be something which is not related to the actual thing//
let myFirstJob = " Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);

// Now if we need to change the value of the any varible than it should be like this only//
myFirstJob = "Racer";
console.log(myFirstJob);

// Assignment for Values and variables//
 let continent = "Asia";
 let country = "India"
 let population = 5;

 console.log(continent);
 console.log(country);
 console.log(population);

 // Data types in javascript//

 // Questions on Data types in Javascript//
  let isIsland = false; // Boolean data type//
  let language; // undefined data type//
  console.log(typeof isIsland);
  console.log(typeof language);
  console.log(typeof continent);
  console.log(typeof country);
 let myAge = 23; // Number data type//
 let myName = "Diwakar"; // String data type//

 let javascriptIsFun = true;
 console.log(javascriptIsFun);

 console.log(typeof myAge);
 console.log(typeof "Diwakar");
 console.log(typeof javascriptIsFun);

 javascriptIsFun = 'YES!';

 let year;
 console.log(year);
 console.log(typeof year); // Undefined Data Types//

 year = 1991;
 console.log(typeof year);

 console.log(typeof null);

 // Let , Const and Var in Javascript//

 let age = 30;
 age = 31; // We can change the value and in technical term which means we mutated the variable//


 // Const is used to declare a constant variable which means we can not change the value of the variable once it is declared //
 // Immmutable Variable//
   let birthYear = 1991;
   console.log(birthYear);

// var is pretty much like let but it has some differences which we will see later//

var job1 = "Dancer";
job1 = "Singer"; // We can change the value of the varible which is declared with var variable//

// Operators in Javascript//

// Assignment for operators in Javasscript//
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;

console.log(description1);

// Maths Operators in Javascript//
let now = 2037;
let ageJonas = now - 1991;
let ageSarah = now - 2018;
console.log(ageJonas , ageSarah);

console.log(ageJonas * 2, ageJonas / 10 , 2 ** 3);
 
const hisName = "Diwakar";
const herName = "Venus";

console.log(hisName + " " + herName);

// Assignment Operators in Javascript//

let x = 10 + 5; // 15

x += 10; // x = x + 10;
x*= 4; // x = x * 4;
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x);

// Comparison Operators in Javascript//

console.log( ageJonas > ageSarah);
console.log(ageSarah >= 18);

// Challenge 1 //
let massMark = 78
let heightMark = 1.69

let massJohn = 92
let heightJohn = 1.95

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark);
console.log(BMIJohn);

let MarkHigherBMI  = ( BMIMark > BMIJohn);
console.log(MarkHigherBMI);

// String and Templete Literals in Javascript//

const firstName5 = "Ketan";
const job5 = 'Gambler';
const birthYear5 = 2005;
const year1 = 2025;

const Ketan = "I'm" + firstName5 + ',a' + (year - birthYear) + 'years old' + job5  + '!';
console.log(Ketan);

// Template Literals in Javascript//

const ketanNew = `I'm ${firstName5} , a ${birthYear5 - year1} years old ${job5}!`;

// We can also use backticks to write any regular string//

console.log(`This is a String`);
console.log('String with \n\
   multiple\n\
   lines');

   console.log(`Multiple 
      line 
      string`);

// If , Else Statements in Javascript//

/*const age1 = 15;
const isOldEnough = age <= 18;

if (isOldEnough) {
   console.log("Diwakar can start driving license");

}
else {
   console.log("He Can drive after 18 years of age");
}


if(){

}
else{

} 

const birthYear0 = 1998;
let century;
if (birthYear0 <= 2000){
   century = 20;
} else {
   century = 21;
}
console.log(century);

// If Else Statement Assignment//

heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn){
    console.log("Mark's BMI is higher than John's!")
} else{
    console.log("John's BMI is higher than Mark's!")
}
if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}`);
} else{
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`)
}

// Types Conversion and Coercion in Javascript//

// Type conversion
const inputYear = "1991";
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

// Now what if we want to convert a string which contains alphabets to number

console.log(Number ("Diwakar")); // Output is NaN
console.log(typeof NaN); // Although NaN is a number but it is a invalid number type.

console.log(String(23));
// Whenever we are converting a number into another type , we need to keep in mind that it should be in capital letters.

//Type Coercion
console.log("I am " + 23 + "years old"); // Here + trigger and convert number to string 
console.log("23" - "10" - 3); // Here - trigger and it convert string into numbers

let n = "1" + 1; 
n = n - 1;
console.log(n); // Output is 10 

// Type Coercion Assignment
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 114

//Truthy and Falsy Values in Javascript

// 5 falsy values in Javascript is 0 '' , undefined , null and NaN

console.log(Boolean(0));
console.log(Boolean (undefined));
console.log(Boolean('Diwakar'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money){
   console.log("Don't spend it all;");
} else {
   console.log('You should get a job1'); 
}

let height  = 0;
if (height){
   console.log("YaY! Height is defined");
} else {
   console.log("Height is Undefined");
}
 // Even though height is 0 but it is a defined varible so it will retuen true but due to falsy value it will not execute that and count it in falsy value and gives us the else statemt 
 // This is a kind of Bug in the JS 

// Equality Operators in Javascript

const age = 18;
if (age === 18) console.log("You just become an adult : D");

const age1 = "18";
if (age1 === 18) console.log("You just become adulttt :D");
// Here it will give error because === is strict equality operator it doen't follow type Coercion in JS , things need to equal than and only it will give it output as true otherwise it will give result as false

const favourite = prompt("Whats your favourite number?");
if (favourite=== 23){
   console.log("Cool ! 23 is an amazing number");
}
else if (favourite===7){
   console.log("7 is also a cool number ")
} else {
   console.log("Better luck next time ");
}

// Logical Operators in Javascript
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);// And Operator
console.log(hasDriversLicense || hasGoodVision);// Or operator
console.log(!hasDriversLicense);// Not Operator

const shouldDrive = hasDriversLicense && hasGoodVision
if (shouldDrive){
   console.log("Sarah is able to drive");
}
else {
   console.log("Someone else should drive...");
}

const isTired = false
console.log(hasDriversLicense || hasGoodVision|| isTired);
if (hasDriversLicense && hasGoodVision && !isTired){
   console.log("Sarah is able to drive");
}

// Assignment for Logical Operators 


const dolphins = (96 , 108 , 89);
const koalas = (88 , 91 , 110);

const scoreDolphins = (dolphins % 3);
const scoreKoalas = (koalas % 3);

console.log(scoreKoalas);
console.log(scoreDolphins);

if(scoreDolphins > scoreKoalas){
    console.log("Dolphins win the trophy")
}
 else if (scoreKoalas > scoreDolphins){
    console.log("Koalas win the trophy")
}
 else if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy")
}
    */

// Switch Statement in Javascript
const day = "sunday";
switch (day){
   case "Monday":
      console.log("Plan Course structure ")
      console.log("Go to coding meetup");
      break

case "tuesday":
   console.log('Prepare theory videos') 
break;
    case "wednesday":
    case "thursday":
      console.log('Write code examples');
      break;
    case "friday":
      console.log("Record Videos");
   break;
case "saturday":
case "sunday":
   console.log("Enjoy the weekend : D");
  }
 
  if (day === "Monday"){
   console.log("Plan Course Structure");
   console.log("Go to coding meetup")
  }
   else if (day === "tuesday"){
   console.log("Prepare theory Videos")
  }
  else if (day === "wednesday" || day === "thursday"){
   console.log("write Code examples");
  }
  else if (day === "friday"){
   console.log("Record Videos");
  }
  else if (day === "saturday" || day === "sunday"){
   console.log("Enjoy the Weekend : D");
  }
  else {
   console.log("Not a valid day");
  }

  // Statement and Expression in Javascript//
   3+4 // This is an expression as this produce a value
   1991 // This is also an expression as this produce a value 

if (23 > 10){
   const str = '23 is bigger';
}

console.log (`I'm ${2037-3938} years old`);

// Condiotional (Ternary) Operator in javascript

const age = 13;
age >= 18 ? console.log("I like to drink wine"):
console.log("I like to drink water");

 const drink = age >=18 ? 'wine' : 'water';
 console.log(drink);






