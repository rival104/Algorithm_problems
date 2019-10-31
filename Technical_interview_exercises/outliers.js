/*
Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd
*/

function detectOutlierValue(string){

  let uniqueIndex = 0;
  let even = 0;
  let odd = 0;
  //Split them into array by space
  const arr = string.split(' ');
  //iterate through the array
  for(let i = 0; i < arr.length; i++){
    //replace the numbers with even or odd
    if(isOdd(arr[i])){
      arr[i] = 'odd';
      odd++;
    }else{
      arr[i] = 'even';
      even++
    }
  }
  //compare odd vs even
  //get the unique even or odd index
  if(odd > even){
    uniqueIndex = arr.indexOf('even') + 1;
  }else{
    uniqueIndex = arr.indexOf('odd') + 1;
  }

  //return the index
  return uniqueIndex;
}

function isOdd(number){
  return number % 2 !== 0;
}

function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log(`passed`);
  }else{
    console.log(`FAILED [${testName}] expected "${expected}" but got this "${actual}"`);
  }
}

const input_1 = "2 4 7 8 10";
const expected_1 = 3;
const actual_1 = detectOutlierValue(input_1);

assertEqual(actual_1, expected_1, 'test for sole odd in a string')

const input_2 = "1 10 1 1";
const expected_2 = 2;
const actual_2 = detectOutlierValue(input_2);

assertEqual(actual_2, expected_2, 'test for sole even in a string')
