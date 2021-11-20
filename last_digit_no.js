// Write a program to display the last digit of a number.
let readlineSync=require("readline-sync")
var number=readlineSync.question("enter the number")
if (number%10){
    console.log(number%10)
}
else{
    console.log("it is invalid")
}

