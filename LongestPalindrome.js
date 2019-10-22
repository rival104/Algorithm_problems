// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  let words = sentence.split(' ');
  let palindromes = [];
  for(let word of words){
    if(isPalindrome(word.toLowerCase())){
      palindromes.push(word);
    }
  }

  console.log(palindromes);
  palindromes.sort(sortAscendingByLength);

  console.log(palindromes);

  return palindromes[palindromes.length - 1];
}


function reverseString(string) {
  return string.split('')
               .reverse()
               .join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName){
  if(actual === expected){
    console.log("passed");
  }else{

    console.log("FAILED "+ "expected "+ expected + "but got "+ actual);
  }
}
// TESTS CASES
const text1 = "anna hello anpna Mom";
const expected1 = "anpna"
assertEqual(findLongestPalindrome(text1), expected1);

const text2 = "";
const expected2 = ""
assertEqual(findLongestPalindrome(text2), expected2);

const text3 = "Anna Civic Kayak Level Madam Mom Noon Radar Redder Tenet Wow";
const expected3 = "Redder"
assertEqual(findLongestPalindrome(text3), expected3);