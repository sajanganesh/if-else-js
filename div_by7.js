// Write a program to check whether a number is divisible by 7 or not.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num%7===0){
    console.log("it is divisible by 7")
}
else{
    console.log("it is not divisible for 7")
}