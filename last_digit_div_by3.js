// Write a program to check whether the last digit of a number( entered by user ) 
// is divisible by 3 or not.
let readlineSync=require("readline-sync")
var number=readlineSync.question("enter the number"),k=0;
if (number%10){
    k=number%10
    if (k%3==0){
        console.log("it is divisible")
    }
    else{
        console.log("it is not divisible")
    }
}
else{
    console.log("it is invalid")
}