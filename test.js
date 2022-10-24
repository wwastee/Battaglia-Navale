const prompt = require('prompt-sync')();  

const GRID_SIZE = 5;


const grid = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
// Ship Locations
const shipLocations = ["3", "9", "15"];
let guess; //Entered value
let count = 0; //counter for rounds
do { //We'll loop indefintely until the user clicks cancel on prompt

  //Construct prompt using string template (multiline)
  const prpt = `Round #${++count}
${printGrid()}
Enter a Number Between 0-19`;
  guess = prompt(prpt);
  if (!guess && guess !== 0)
    break; //Stop when cancel was clicked
  
  const hit = shipLocations.indexOf(guess) >= 0;
  console.log(`At round ${count}, cell ${guess} is a ${hit ? 'hit': 'miss'}`);
  grid[guess] = hit ? '1' : 'X';
} while (guess || guess === 0); //Must have an exit condition

/** Pretty-print the grid **/
function printGrid() {
  let res = "";
  for (let r = 0; r < GRID_SIZE; r++) {
    let srow = "";
    for (let c = 0; c < GRID_SIZE; c++) {
      srow += " " + grid[r * GRID_SIZE + c];
    }
    res += srow.substr(1) + '\n';
  }
  return res;
}