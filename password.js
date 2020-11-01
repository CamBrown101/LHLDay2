const processArgSplit = () => {
  return process.argv[2];
};

// const obfuscate = (input) => {
//   let newString = '';
//   //loop through each character of string
//   for (let i = 0; i < string.length; i++) {
//     // "a" in the string replaced with a "4".
//     if (string[i] === 'a') {
//       newString += '4';
//       //"e" in the string replaced with a "3".
//     } else if (string[i] === 'e') {
//       newString += '3';
//       // "o" (oh) in the string replaced with a "0" (zero).
//     } else if (string[i] === 'o') {
//       newString += '0';
//       // "l" (el) in the string replaced with a "1" (one).
//     } else if (string[i] === 'l') {
//       newString += '1';
//     } else {
//       newString += string[i];
//     }
//   }
//   // return newString
//   return newString;
// };
const obfuscate = (string) => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
        newString += '4';
        break;
      case 'e':
        newString += '3';
        break;
      case 'o':
        newString += '0';
        break;
      case 'l':
        newString += '1';
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
};

console.log(obfuscate(processArgSplit()));
