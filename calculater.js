// Write a program to accept two numbers and mathematical operators and perform operation accordingly.
// Like:
// Enter First Number: 7
// Enter Second Number : 9
// Enter operator : +
// Your Answer is : 16
let readlineSync=require("readline-sync")
var num=readlineSync.question("enter the number")
var num1=readlineSync.question("enter the number")
var operator=readlineSync.question("enter the operator")
if (operator=="-"){
    console.log(num-num1)
}
else if (operator=="+"){
    console.log(num+num1)
}
else if (operator=="/"){
    console.log(num/num1)
}
else if (operator=="%"){
    console.log(num%num1)
}
else if (operator=="*"){
    console.log(num*num1)
}
else if (operator=="**"){
    console.log(num**num1)
}
