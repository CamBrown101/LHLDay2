//create function rollDice with one argument
const rollDice = () => {
  //splice proccess.argv at 2 and save result
  const numberOfDice = process.argv.slice(2);
  //Create empty array for dice rolls to be added
  const diceNumbers = [];
  //create a loop to add numbers todiceNumbers array based on input number
  for (let i = numberOfDice; i > 0; i--) {
    //per argument create a random number between 1-6, add this number to an array
    diceNumbers.push(Math.floor(Math.random() * 6));
  }
  //.join() this array to a string saying : rolled (number of dice) dice: (numbers on each dice)
  numString = diceNumbers.join(', ');
  //return final string + numstring
  return `Rolled ${numberOfDice} dice: ${numString}`;
};

console.log(rollDice());
