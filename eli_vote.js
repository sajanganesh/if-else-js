// Write a program to check whether a person is eligible for voting or not. (accept age from user)
let readlineSync=require("readline-sync")
var age=readlineSync.question("enter the age")
if (age>=21){
    console.log("it is eligible for vote")
}
else{
    console.log("it is not eligible for vote")
}