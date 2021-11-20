// Write a program to display "Hello" if a number entered by user is a multiple of five , otherwise print "Bye"
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num%5==0){
    console.log("Hello")
}
else{
    console.log("Bye")
}
