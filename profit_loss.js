// Write a python program to calculate profit or loss.
let readlineSync=require("readline-sync")
var sales=readlineSync.question("enter the sales ammount")
var invest=200
if (sales>invest){
    console.log(invest-sales,"profit")
}
else if (sales<invest){
    console.log(invest-sales,"loss")
}
else{
    console.log("no profit no loss")
}
