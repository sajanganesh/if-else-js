// Write a python program to check whether the triangle is equilateral, isosceles or scalene triangle.
let readlineSync=require("readline-sync")
var digree1=readlineSync.question("enter the triangle digree")
var digree2=readlineSync.question("enter the triangle digree")
var digree3=readlineSync.question("enter the triangle digree")
if (digree1==digree2 && digree2==digree3 && digree3==digree1){
    console.log("it is equilateral triangle")
}
else if (digree1==digree2 || digree2==digree3 || digree3==digree1){
    console.log("it is isosceles triangle")
}
else{
    console.log("it is scalene triangle")
}
