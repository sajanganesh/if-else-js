// Write a python program to input any character and check whether it is alphabet, digit or special character.
let readlineSync=require("readline-sync")
var chare=readlineSync.question("enter the charecter")
if (chare>"a" && chare<"z"){
    console.log("it is alphabet")
}
else if (chare>"0" && chare<"9"){
    console.log("it is number")
}
else{
    console.log("it is special charecter")
}