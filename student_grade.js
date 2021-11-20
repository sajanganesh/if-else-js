// Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
let readlineSync=require("readline-sync")
var Percentage=readlineSync.question("enter the marks")
if (Percentage >= 90){
    console.log("grade A")
}
else if (Percentage >= 80){
    console.log("grade B")
}
else if (Percentage >= 70){
    console.log("grade C")
}
else if (Percentage >= 60){
    console.log("grade D")
}
else if (Percentage >= 50){
    console.log("grade E")
}
else if (Percentage >= 40){
    console.log("grade F")
}

