// Write a program to check whether a number entered is a three digit number or not.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num>99 && num<1000){
    console.log("yes number is three digits")
}
else{
    console.log("number not a three digits")
}