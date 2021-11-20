// Write a python program to check whether a character is an alphabet or not.
let readlineSync=require("readline-sync")
var char=readlineSync.question("enter the charecter")
if (char>"a" && char<"z"){
    console.log("it is alphabet")
}
else{
    console.log("it is not alphabet")
}