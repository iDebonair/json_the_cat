/*const diceRoller = process.argv[2];

const diceOutput = [];
for (let i = 0; i < diceRoller; i++) {
  const roll = Math.floor(Math.random() * 6) + 1;
  diceOutput.push(roll);
}
console.log(`Rolled ${diceRoller} dice: ${diceOutput.join(', ')}`);
*/
let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar); 
}

myFunction();

console.log("outside myFunction, myVar is:", myVar);  