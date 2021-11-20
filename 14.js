// nd above in age can go to school.
// 
// and above in age can vote in elections.
// 
// and above in age can drive a car.
// 
// and above in age can marry.
// 
// and above in age can legally drink.
// 
//  the user as input. console what all activities the user can do from the list above.
// 
// user enters age as 20, the code should console:
// 
// hool
// 
// elections
// 
// ge as 24, the code will print:
// 
// hool
// 
// elections
// 
// car

let readlineaSync = require("readline-sync");
var age=readlineaSync.questionInt("enter age");
if(age>=5){
console.log("You can go school");
}
if(age>=18){
console.log("You can vote in elections.");
}
if(age>=21){
console.log("You can drive a car");
}
if(age>=24){
console.log("You can marry");
}
if(age>=25){
console.log("You can drink");
}
