// Accept three numbers from the user and display the second largest number.
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
var num2=readlineSync.question("enter the number")
var num1=readlineSync.question("enter the number")
if ((num1>num2 && num2>num) ||(num>num2 && num2>num1) ){
    console.log(num2,"is second largest number")
}
else if ((num>num1 && num1>num2)||(num2>num1 && num1>num)){
    console.log(num1,"is second largest number")
}
else if ((num2>num && num>num1)||(num1>num && num>num2)){
    console.log(num,"is second largest number")
}

