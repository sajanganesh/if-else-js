// var num1 = 300 - 123
// Take one user input and check that number is equal or not.
// If the new user input is equal to num1, console "Equal" else console "Not equal".

var num1 = 300 - 125;
let readlineSync = require("readline-sync");
var num2=readlineSync.question("enter a number");
if(num1==num2){
console.log("equal hai")
}
else{
console.log("not equal")
}
