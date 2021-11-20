
let readlineSync=require("readline-sync")
var units=readlineSync.question("please enter the number of units you consumed in a month")
var payAmount=0,fixedcharge=0;
if(units<=100){
    payAmount=units*1.5
    fixedcharge=25.00
    console.log("\nElecticity bill is:",payAmount+fixedcharge)
}
else if(units<=200){
    payAmount=(100*1.5)+(units-100)*2.5
    fixedcharge=50.00
    console.log("\nElecticity bill is :",payAmount+fixedcharge)
}
else if(units<=300){
    payAmount=(100*1.5)+(200-100)*2.5+(units-200)*4
    fixedcharge=75.00
    console.log("\nElecticity bill is :",payAmount+fixedcharge)
}
else if (units<=350){
    payAmount=(100*1.5)+(200-100)*2.5+(300-200)*4+(units-300)*5
    fixedcharge=100.00
    console.log("\nElecticity bill is :",payAmount+fixedcharge)
}
else{
    payAmount=0
    fixedcharge=1500.00
    console.log("\nElecticity bill is :",payAmount+fixedcharge)
}



