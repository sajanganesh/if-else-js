// Write a python program to check whether a number is divisible by 5 and 11 or not.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
if (num%5===0 && num%11===0){
    console.log("divisible")
}
else if (num%5!==0 && num%11!==0){
    console.log("not divisible")
}
else{
    console.log("it is invalid")
}


