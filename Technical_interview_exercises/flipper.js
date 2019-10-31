// Submit de-obfuscated code
// Flip every pair of characters in a string.


// Example:
// var input = 'check out how interesting this problem is, it\'s insanely interesting!';
// var output = flipPairs(input);
// console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

/*
Input -> a string
output -> a string where every pair flipped.

flippedString;
For evry two char from string till end of string
  flippedString <= add the last one and then first char.

return flippedString.
*/

function flipPairs(string){
  let flippedPairs = "";

  for(let i = 0; i < string.length; i += 2){
    if(i+1 === string.length){
      flippedPairs += string.charAt(i);
      break;
    }

    const first = string.charAt(i);
    const second = string.charAt(i+1);

    flippedPairs += second + first;
  }
  return flippedPairs;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';

var output = flipPairs(input);
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";

function assertflip(output, expected){
  if(output === expected){
    console.log("passed");
  }else{
    console.log("Error! expected: \"" + expected + "\" but got this \"" + output);
  }
}

assertflip(output, expected);
