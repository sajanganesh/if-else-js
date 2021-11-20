// Accept the number of days from the user and calculate the charge for library according to following :
// First five days : Rs 2/day.
// Six to ten days  : Rs 3/day.
// Ten to 15 days  : Rs 4/day
// After 15 days    : Rs 5/day
let readlineSync=require("readline-sync")
var days=readlineSync.question("enter the day")
if (days>=1 && days<=5){
    console.log(days*2,"it is library charge")
}
if (days>=6 && days<=10){
    console.log(days*3,"it is library charge")
}
if (days>10 && days<=15){
    console.log(days*4,"it is library charge")
}
if (days>=15 && days<=30){
    console.log(days*5,"it is library charge")
}


