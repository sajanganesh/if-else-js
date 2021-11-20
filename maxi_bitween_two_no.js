// Write a python program to find maximum between two numbers.
let readlineSync=require("readline-sync")
var number=readlineSync.question("enter the question")
var num=readlineSync.question("enter the number")
if (number>num){
    console.log(number,"is maximum than",num)
}
else if (number<num){
    console.log(num,"is maximum than",number)
}
else{
    console.log("it is invalid number")
}