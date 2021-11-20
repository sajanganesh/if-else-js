// Write a Python program to find those numbers which are divisible by 7 
// and multiple of 5, between 1500 and 2700 (both included).
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the question")
if (num>=1500 && num<=2700){
    if (num%7==0 && num%5==0){
        console.log("divisible")
    }
    else{
        console.log("not divisible")
    }
}
