// PROGRAMMA DI BATTAGLIA NAVALE

const prompt = require('prompt-sync')();

console.log("Benvenuto al maggiko giuoco di battaglia navabbile");

const GridSize = 20;

const grid = ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];

let ShipLocat = (Math.round(Math.random() * 10));



let f = "";

for(let j = 0; j< GridSize; j++){
    if(j%5 == 0 && j != 0){
        (f = f + "\n");
    }
    f = f + grid[j] + " ";
}

console.log(f);

