let js = "amazing";
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

} */

const birthYear0 = 1998;
let century;
if (birthYear0 <= 2000){
   century = 20;
} else {
   century = 21;
}
console.log(century);

// If Else Statement Assignment//






