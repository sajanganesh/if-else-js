// Write a python program to count the total number of notes in a given amount.
let readlineSync=require("readline-sync")
var ammount=readlineSync.question("enter notes ammount")
note2000=note500=note100=note1=0
if (ammount>2000){
    note2000=ammount/2000
    ammount=ammount-note2000*2000
    console.log(note2000)
}
if (ammount>500){
    note2000=ammount/500
    ammount=ammount-note500*500
    console.log(note500)
}
if (ammount>100){
    note2000=ammount/100
    ammount=ammount-note100*100
    console.log(note100)
}
if (ammount>1){
    note2000=ammount/1
    ammount=ammount-note1*1
    console.log(note1)
}