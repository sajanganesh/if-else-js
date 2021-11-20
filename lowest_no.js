// Write a program to find the lowest number out of two numbers excepted from the user.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
var num1=readlineSync.question("enter the number")
if (num<num1){
    console.log(num,"is lowest number than",num1)
}
else{
    console.log(num1,"is lowest number than",num)
}