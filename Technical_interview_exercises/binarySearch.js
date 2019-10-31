/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function bst(arrayOfNums, target) {
  //pick the midpoint
  let beginIndex = 0;
  let endIndex = arrayOfNums.length - 1;
  let midpoint = 0;

  //while beginindex !== endIndex
  while(beginIndex <= endIndex){
    //pick the midpoint
    midpoint = Math.floor((beginIndex + endIndex) / 2);
    //compare target with midpoint value
    if(target === arrayOfNums[midpoint]){
      //return midpoint
      return midpoint;
    }

    //if it's higher consider right half
    if(target > arrayOfNums[midpoint]){
      beginIndex = midpoint + 1;
    }else{
      //else consider left half
      endIndex = midpoint - 1;
    }
  }

  //return the index of the target.
  return null;
}

function assertEqual(actual, expected, testName) {
  if(actual === expected){
    console.log(`passed`);
  }else{
    console.log(`FAILED [${testName}] expected: "${expected}" but got "${actual}"`);
  }
}

const input_1 = [1, 3, 16, 22, 31, 33, 34];
const target_1 = 31;
const expected_1 = 4;

assertEqual(bst(input_1, target_1), expected_1, 'checking the index of regualar numArray');

assertEqual(bst(input_1, 30), null, 'checking the index of regualar numArray')
