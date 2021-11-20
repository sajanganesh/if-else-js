// Write a python program to input angles of a triangle and check whether triangle is valid or not.
let readlineSync=require("readline-sync")
var digree=readlineSync.question("enter the triangle digree")
if (digree===180){
    console.log("it is valid triangle")
}
else{
    console.log("it is invalid triangle")
}
