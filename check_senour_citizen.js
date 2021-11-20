// Write a program to check whether a person is a senior citizen or not.
let readlineSync=require("readline-sync")
var age=readlineSync.question("enter the age")
if (age>=60 && age<=80){
    console.log("this is senior citizen")
}
else{
    console.log("this is not senior citizen")
}