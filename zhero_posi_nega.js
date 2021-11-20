// Write a python program to check whether a number is negative, positive or zero.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num==0){
    console.log("zero")
}
else if(num<0){
    console.log("negative")
}
else if (num>0){
    console.log("positive")
}

else{
    console.log("it is invalid variable")
}