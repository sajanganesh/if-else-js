// Accept any city from the user and display the monument of that city.
                //   City                                 Monument
                //   Delhi                               Red Fort
                //   Agra                                Taj Mahal
                //   Jaipur                              Jal Mahal
let readlineSync=require("readline-sync")
var city=readlineSync.question("enter the city name :-")
if (city=="delhi"){
    console.log("red fort")
}
else if (city=="agra"){
    console.log("taj mahal")
}
else if (city=="jaipur"){
    console.log("jal mahal")
}