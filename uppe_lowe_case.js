// Write a python program to check whether a character is uppercase or lowercase alphabet.
let readlineSync=require("readline-sync")
var char=readlineSync.question("enter the charecter")
if (char>"a" && char<"z"){
    console.log("it is lower case")
}
else if (char>"A" && char<"Z"){
    console.log("it is upper case")
}
else{
    console.log("it is invalid charecter")
}