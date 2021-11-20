// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.
let readlineSync=require("readline-sync")
var Percentage=readlineSync.question("enter the marks")
if (Percentage <= 100 && Percentage>=80){
    console.log("grade A")
}
else if (Percentage >=80 && Percentage<=60){
    console.log("grade B")
}
else if (Percentage <=60){
    console.log("grade C")
}
else if (Percentage <= 50){
    console.log("grade D")
}
else if (Percentage <= 45){
    console.log("grade E")
}
else if (Percentage <= 25){
    console.log("grade F")
}

