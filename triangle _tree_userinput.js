// Write a python program to input all sides of a triangle and check whether the triangle is valid or not.
let readlineSync=require("readline-sync")
var digree1=readlineSync.question("enter the triangle digree")
var digree2=readlineSync.question("enter the triangle digree")
var digree3=readlineSync.question("enter the triangle digree")
var sum=digree1+digree2+digree3
if (sum===180){
    console.log("it is valid triangle")
}
else{
    console.log("it is invalid triangle")
}
