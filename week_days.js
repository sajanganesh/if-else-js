// Write a python program to input week number and print week day.
let readlineSync=require("readline-sync")
var day=readlineSync.question("enter the day number")
if (day==="1"){
    console.log("monday")
}
else if (day==="2"){
    console.log("tuesday")
}
else if (day==="3"){
    console.log("wednesday")
}
else if (day==="4"){
    console.log("thursday")
}
else if (day==="5"){
    console.log("friday")
}
else if (day==="6"){
    console.log("saturday")
}
else if (day==="7"){
    console.log("sunday")
}