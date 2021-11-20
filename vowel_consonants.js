// Write a python program to input any alphabet and check whether it is vowel or consonant.
let readlineSync=require("readline-sync")
var char=readlineSync.question("enter the charecter")
if (char==="a"|| char==="A"||char==="i"||char==="I"||char==="o"||char==="O"||char==="u"||char==="U"||char==="e"||char==="E"){
    console.log("it is vowel")
}
else if ((char>"A" ||char>"a") &&(char<"z" || char<"Z")){
    console.log("it is alphabets")
}
else{
    console.log("it is invalid charecter")
}