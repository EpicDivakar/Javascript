/*let js= 'amazing';
console.log(78+70+30);
console.log("Diwakar");

let firstName = "Diwakar is 19 right now.";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob); */

// Data Types//

/*let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Diwakar');

javascriptIsFun = 23;
console.log( typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(year);

//How to Declare variables in Javascript//

let age = 45;
age = 46;
console.log(age);

/*const ageCurrent = 40;
ageCurrent = 40;
console.log(ageCurrent)*/
// This will show error because const values are never mutated//

/*var myName = "Diwakar";
myName = "Verma";
console.log(myName);

//Now let's talk about operators in Javascript//
//Maths Operator//
let birthdate = 2005;
let ageDiwakar= 2027 - birthdate;
let agePrashant = 2028- birthdate;
console.log(ageDiwakar , agePrashant);

let firstName = "Venus";
let lastName = "Mehra";
console.log(firstName + ' ' + lastName);
// Assignment Operator//
let x = 10+5;
x+=10;//x = x + 10 = 25//
x++ //x = x+1
x-- // decrease the value by one //

//Comparison Operator//
console.log(agePrashant > ageDiwakar); // > , < , >= <=
console.log(agePrashant>=18);

const isFullAge = ageDiwakar <= 18;
console.log(isFullAge);

// Operator Precedence//

const now = 2037;
const ageJonas = now - 1991;
const agesarah = now - 2018;

console.log(now - 1991 > now - 2018);

let a , b ;
a = b = 25-10-5;//x = y = 10 , x = 10
console.log(a , b);

// Strings and templete Literals//
 const myName = 'Rohit';
 const job = 'Developer';
 const birthYear = '2005';
 const year = 2024;
const rohit = "I'm" + myName + 'a' + (year - birthYear) + 'years old' + job + '!';
console.log(rohit);

const rohitNew = `I'm ${myName} , a ${year -birthYear} year old ${job}!`;
console.log(rohitNew);

console.log(`Just a regular string...`);

console.log(`My name \n\
    is Diwakar \n\
    verma`);
    */

//If else statement//
/*const age = 19;
const isOldEnough = age >=18;
if(isOldEnough){
    console.log(`Yes , Diwakar can drive his car`);
}
else{
    console.log(`Diwakar Can't drive a car`);
}


const decision = true;

const firstName = "Diwakar";
const birthYear = 2005;
const job = "developer";
const year = 2024;

const details = "I'm " +  firstName + " , a " + (year - birthYear ) + "years old " + job + "! ";
console.log(details)
const detailsNew = `I'm ${firstName} a ${year - birthYear} ${job}!`;
console.log(detailsNew);

//If - else statement//

const birthyear = 2005;
let century;

if (birthyear >=2000){
    century = 20;
} else {
    century = 21;
}
console.log(century);

//Type conversion and coercion in JS//

const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log( String(23 , 24));

console.log('I am ' + 23 + ' years old');
console.log('23' - 4);
console.log('23' / '2');

//Truthy and Falsy Values //

console.log(Boolean (0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money){
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');

}

const newMoney = 100;
if (newMoney){
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');

}

let height;
if(height){
    console.log("yah , height is defined ")
}
else{
    console.log("yah , height is undefined");
}

//Equality Operators//
const age = 18;
if (age===18)console.log("You just become an adult:D(Strict)")
if (age == 18) console.log('You just become an adult:D(Loose)')

const favourite = prompt("Name your fav. car");
console.log(favourite);

if (favourite==23){
    console.log('Cool! 23 is a amazing number!')
}else if (favourite ===7){
    console.log('7 is also a cool number')
} else if (favourite ===9){
    console.log("9 is also a cool number")
}else {
    console.log("Number is not 23 or 7 or 99")
}

//Boolean Logic//
const hasDriverLicense = true;//A
const hasGoodVision = true;//B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision){
    console.log('Diwakar is able to drive')
} else{
    console.log('Someone else should drive..');
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);*/

//The switch statement//

const day = "Monday";

switch(day){
    case 'Monday':
        console.log('Plan course Structure');
        console.log('Go to ');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');    
        break;
    case 'Wednesday':
    case 'Thursday' :
        console.log("Write code examples"); 
        break;
    case 'friday':
        console.log("Record Videos")
        break;
    case 'Saturday':
    case 'Sunday':    
    console.log("Enjoy the Weekend :D");
         break;
    default:
    console.log('Not a valid day!');   
}

const Year = "january";
switch(Year){
    case 'January':
        console.log("Yes , welcome to january");
    break;
    case 'Febuary':
        console.log("Yes, its officially feb.")
    break;
    case 'March':
        console.log("Welcome to march")
    break;
    case 'December':
        console.log("Welcome to December Bitch")
    break;
    default:
        console.log("You didn't enter the right month");
}

const year1 = 2003;
console.log(year1 % 2 ==0);
switch(year1){
    case (year1 % 2 == 0):
    console.log("Year is divisible by 2");
    break;
    case (year1 % 3 ==0):
    console.log("Year is divisible by 3 ");
    break;
    default:
    console.log("not devisible by 2 and 3");
}
//condition? agr condition true sahi hua toh : Agr condition glt huve toh//
 console.log (year1 % 2 ==0? "divisible by 2" : "Not divisible by two");

let result = 
year1>2000? "greater than 2000" : "Not greater than 2000"
console.log(result);
