/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = (inputArray) => {
  // declare the string with the arrays to be placed
  let returnString = '';
  //loop through the array
  for (let i = 0; i < inputArray.length; i++) {
    //add each item of the array to the return string
    //seperate with a "," and a space
    i === inputArray.length - 1
      ? (returnString += inputArray[i])
      : (returnString += inputArray[i] + ', ');
  }
  //return the final string
  return returnString;
};

// Test / Driver Code below...
const conceptList = [
  'gists',
  'types',
  'operators',
  'iteration',
  'problem solving',
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
