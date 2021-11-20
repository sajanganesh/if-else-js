// Write a python program to check whether a number is even or odd.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num%2===0){
    console.log("it is even number")
}
else if (num%2!==0){
    console.log("it is odd number")
}
else{
    console.log("it is invalid number")
}