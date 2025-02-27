//Script Mode is special mode in JS which help us to write bug free code//
'use strict';
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense=true;
if (hasDriversLicense) console.log("Yes He can drive the car");

//Functions in Javascript //
//A peice of code that can be used over and over in the code//

function logger(){//Logger is function name//
    console.log("My name is Diwakar");//This is function body//
}
logger();//This is function invocation//
logger();//This is function invocation//
logger();//This is function invocation//
logger();//This is function invocation//
logger();//This is function invocation//

function fruitProcessor(apples , oranges){
   // console.log(apples , oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
// const applejuice=fruitProcessor(5,0)
// console.log(applejuice);
console.log(fruitProcessor(5,0))
const appleorangejuice=fruitProcessor(2,4);
console.log(appleorangejuice);
const orangeAppleJuice=fruitProcessor(0,8);
console.log(orangeAppleJuice);

//Function Declaration and Expression
//Function Declaration
function calcAge1(birthYear){
    /*nst age = 2037-birthYear;
    return age;*/
    return 2037-birthYear;
}
 const age1 =calcAge1(1991);
 console.log(age1);
 //Function Expression
 const calcAge2=function (birthYear){
    return 2037-birthYear;
 }
 const age2 = calcAge2(1991);
console.log(age1,age2);

// Arrow Function//
// Arrow Function Example//
  const calcAge3 =birthYear => 2045-birthYear
   const Age3=calcAge3(1990);
   console.log(Age3);
//Arrow function should only be used when we only have one parameter//

//Function Calling another function in javascript//
function cutfruitpieces(fruit){
    return fruit *5;
}
function fruitProcessor(apples , oranges){
    const applejuice = cutfruitpieces(apples);
    const orangejuice = cutfruitpieces(oranges);
     const juice =`Juice with ${applejuice} peice of apples and ${orangejuice} pieces of oranges.`;
     return juice;
 }
 console.log(fruitProcessor(5,10))

 //Its very common to call one function to another function//
 //Here we learn about we should not call a function twice//
 






