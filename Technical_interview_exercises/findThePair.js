/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);

3, 34, 4, 12, 5, 2

2, 3, 4, 5, 12, 34
console.log(pair); // --> [4, 5]
*/

//iterative solution
function findPairForSum(arrayOfNumbers, targetSum) {
  let pair = [];
  //Iterate over the array
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    for(let j = i + 1; j < arrayOfNumbers.length; j++){
    //compare each pair with targeSum
      if(arrayOfNumbers[i] + arrayOfNumbers[j] === targetSum){
        pair.push(arrayOfNumbers[i]);
        pair.push(arrayOfNumbers[j]);
        return pair;
      }
    }
  }
  //return array pair of the targetSum.
  return pair;
}


var pair = findPairForSum([3, 34, 4, 12, 5, 2], 8);
console.log('result ' + pair); // --> [4, 5]

var pair1 = findPairForSum([3, 34, 4, 12, 5, 2, 0], 2);
console.log('result2: ', pair1); // --> []


// // more efiicient but complex solution
// function findPairForSum(arrayOfNumbers, targetSum) {
//   let targetPairs = {};
//   let targetReversePairs = {};

//   let possiblePair = [];
//   let resultPair = [];

//   for(let i = 0; i < Math.ceil(targetSum/2); i++) {
//     //add the possible pairs in a map objects
//     targetPairs[i] = targetSum - i;
//     targetReversePairs[targetSum - i] = i;
//   }
//   console.log(targetPairs);
//   console.log(targetReversePairs);

//   for(let elm of arrayOfNumbers) {
//     if(targetPairs[elm] !== undefined){
//       possiblePair.push(elm);
//     }
//     if(targetReversePairs[elm] !== undefined){
//       possiblePair.push(elm);
//     }
//   }

//   console.log(possiblePair);

//   for(let elm of possiblePair){
//     if(targetReversePairs[elm] !== undefined){
//       resultPair.push(targetReversePairs[elm]);
//       resultPair.push(elm);
//     }
//   }

//   return resultPair;
// }
