// Take the age of 3 people by user and determine oldest and youngest among them.
let readlineSync=require("readline-sync")
var age=readlineSync.question("enter the age")
var age1=readlineSync.question("enter the age")
var age2=readlineSync.question("enter the age")
if (age>=60 || age<=80 && age1>=60 || age1<=80 && age2>=60 || age<=80){
    if (age>age1 && age>age2){
        console.log(age,"is oldest than",age1,age2)
    }
    else if (age1>age && age1>age2){
        console.log(age1,"is oldest than",age,age2)
    }
    else if (age2>age && age2>age1){
        console.log(age2,"is oldest than",age1,age)
    }

}
























