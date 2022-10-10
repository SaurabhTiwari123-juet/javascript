const tt = true;
console.log(tt);

let kk = 23;
console.log(kk);

const now = 2037;
const myage = now - 1998;
const amanage = now - 1994;
console.log(myage, amanage);

// 2**3 means 2 to the power 3 which is 8
console.log(2 ** 3);
// strings and templete literals they are easy to use

const name = "Saurabh";
const age = 22;
const occupation = "student";
const saurabhdefine = `I am a ${occupation} my name is ${name} and my age is ${age}`;
console.log(saurabhdefine);

// multiple line strings
console.log("string with \n\
multiple \n\
lines");
// another way is using template literals
console.log(`string 
with  multiple 
lines part 2`);
// taking decisions if else statements

const ageefordrive = 2;
const isoldenough = ageefordrive >= 18;
if (isoldenough) console.log(`congrats you are able to drive car 👍`);
else {
  console.log(`oops 😒 you are not eligible for driving`);
}
const birthYears = 1999;
let century;
if (birthYears <= 2000) century = 20;
else {
  century = 21;
}
console.log(century);

// bmi question 2

const massmark = 95;
const heightmark = 1.88;
const massjohn = 85;
const heightJohn = 1.75;
const bmimark = massmark / heightmark ** 2;
const BMIJohn = massjohn / heightJohn ** 2;
const markHigherBMI = bmimark > BMIJohn;

if (markHigherBMI)
  console.log(`marks  bmi ${bmimark} is higher then john bmi ${BMIJohn}`);
else {
  console.log(`marks  bmi ${bmimark} is lower then john bmi ${BMIJohn}`);
}
