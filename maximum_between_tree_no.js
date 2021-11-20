// Write a python program to find maximum between three numbers.
let readlineSync=require("readline-sync")
var number=readlineSync.question("enter the question")
var num=readlineSync.question("enter the number")
var num1=readlineSync.question("enter the number")
if (number>num && number>num1){
    console.log(number,"is maximum than",num ,num1)
}
else{
    console.log("it is invalid number")
}
if (number<num && num>num1){
    console.log(num,"is maximum than",number,num1)
}
else{
    console.log("it is invalid number")
}
if (number<num1 && num<num1){
    console.log(num1,"is maximum than",number,num)
}
else{
    console.log("it is invalid number")
}