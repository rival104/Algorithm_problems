/*
Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/
function flipEveryNChars(string, number){
  let result = '';
  let piece = '';
  //iterate through n number of chars in a string
  for(let i = 0; i < string.length; i += number){
    if(!string[i+(number-1)]){
      piece = string.slice(i);
    }else{
      piece = string.slice(i, i + number);
    }

    //reverse the string and add it to the result
    result += reverseString(piece);
  }

 return result;
}

function reverseString(string){
  let reverseString = '';
  for(let i = 0; i < string.length; i++){
    reverseString = string[i] + reverseString;
  }
  return reverseString;
}

function assertEqual(actual, expected, testname){
  if(actual === expected){
    console.log('passed');
  }else{
    console.log('FAILED [' + testname + '] expected this "' + expected + '" but got this "' + actual + '".');
  }
}

const input_1 = 'a short example';
const actual_1 = flipEveryNChars(input_1, 5);
const expected_1 = 'ohs axe trelpma';

assertEqual(actual_1, expected_1, 'flip for 5 chars');

const input_2 = 'a2';
const actual_2 = flipEveryNChars(input_2, 2);
const expected_2 = '2a';

assertEqual(actual_2, expected_2, 'flip for 2 chars');

const input_3 = '';
const actual_3 = flipEveryNChars(input_3, 10);
const expected_3 = '';

assertEqual(actual_3, expected_3, 'flip for empty string');
