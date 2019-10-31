/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

function transposeTwoStrings(array) {
  let resultString = '';
  let largerStringLength = 0;
  //compare two string get the larger one.
  if(array[0].length > array[1].length){
    largerStringLength = array[0].length;
  }else{
    largerStringLength = array[1].length;
  }
  //iterate over each position of the two arrays given
  for(let i = 0; i < largerStringLength; i++){
    //if one of them undefined at any position pad with space.
    //add it to the resultString.
    if(array[0][i] && array[1][i]){
      resultString += array[0][i] + ' ' + array[1][i] + '\n';
    }else if(array[0][i]){
      resultString += array[0][i] + ' ' + ' ' + '\n';
    }else{
      resultString += ' ' + ' ' + array[1][i] + '\n';
    }

  }
  //return a string
  return resultString;
}

function assertEqual(actual, expected, testName) {
  if(actual === expected) {
    console.log('passed');
  }else{
    console.log(`FAILED [${testName}] expected \n"${expected}" \nbut got "${actual}"`);
  }
}

const input_1 = ['Hello','World'];
const actual_1 = transposeTwoStrings(input_1);
const expected_1 = 'H W\ne o\nl r\nl l\no d\n';

assertEqual(actual_1, expected_1, 'transpose of equal length strings');

const input_2 = ['Hello','Worl'];
const actual_2 = transposeTwoStrings(input_2);
const expected_2 = 'H W\ne o\nl r\nl l\no  \n';

assertEqual(actual_2, expected_2, 'transpose of 2nd length strings smaller');

const input_3 = ['Hell','World'];
const actual_3 = transposeTwoStrings(input_3);
const expected_3 = 'H W\ne o\nl r\nl l\n  d\n';

assertEqual(actual_3, expected_3, 'transpose of 1st length strings smaller');
