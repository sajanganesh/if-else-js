// Write a python program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let readlineSync=require("readline-sync")
// var salary=readlineSync.question("please enter your basic salary")
var salary=3000
var hra=0,s=0
if (salary<10000){
    hra=(20/100)*salary
    s=(80/100)*salary
    console.log(salary+hra+s,"is salary gross")
}
else if (salary<20000){
    hra=(25/100)*salary
    s=(90/100)*salary
    console.log(hra+salary+s,"is your gross salary")
}
else if (salary>20000){
    hra=(30/100)*salary
    s=(95/100)*salary
    console.log(hra+salary+s,"is your gross")
}










































