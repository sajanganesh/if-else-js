// Write a python program to check whether a year is leap year or not.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num%400===0){
    console.log("it is leap year")
}
else if (num%4!==0){
    console.log("it is not leap year")
}
else{
    console.log("it is invalid year")
}