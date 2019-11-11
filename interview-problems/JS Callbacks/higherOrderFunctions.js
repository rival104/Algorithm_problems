// ADD CODE HERE
function pluralize(inputArray) {
  const array = [];
  //iterate through the array
  for(let i = 0; i < inputArray.length; i++){
  	//add an "s" to the element push it to newAray
    array.push(inputArray[i] + 's');
  }

  //return the updated array
  return array;
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


// ADD CODE HERE
function subtractTwo(number){
  return number - 2;
}

function map(arrayOfNumbers, callback) {
  let output = [];
  for(let i = 0; i < arrayOfNumbers.length; i++){
    output.push(callback(arrayOfNumbers[i]));
  }
  return output;
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

function forEach(array, callback) {
  for(let i = 0; i < array.length; i++){
    callback(array[i]);
  }
}

function map(array, callback) {
  let output = [];
  forEach(array, function(el) {
    output.push(callback(el));
  });

  return output
}
//Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

function reduce(array, callback, accumalator) {
	let acc = accumalator;

  for(let elm of array){
    acc = callback(acc, elm);
  }
  return acc;
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8


//input : two arrays;
//output : new array with common elemts.

//second solution more efficient
function intersection(arrays) {
	let resultArray = [];
  let map = {};

  for(let array of arrays){
    map = buildNumMap(array, map);
  }
  console.log(map);

  for(let key in map){
    if(map[key] === arrays.length){
      resultArray.push(Number(key));
    }
  }

  return resultArray;
}

function buildNumMap(array, map){
  let numMap = map;
  for(let elm of array){
    if(numMap[elm]){
      numMap[elm]++;
    }else{
      numMap[elm] = 1;
    }
  }
  return numMap;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// //first solution
// function intersection(arrays) {
// 	let newArray = [];

// 	for(let array of arrays){
//     array = array.sort(comparable);
//     console.log(array);
//   }

//   for(let i = 0; i < arrays[0].length; i++){
//     for(let j = 1; j < arrays.length; j++){
//       if(!arrays[j].includes(arrays[0][i])){
//         break;
//       }
//       if(j === arrays.length -1){
//         newArray.push(arrays[0][i]);
//       }
//     }
//   }

//   return newArray;
// }

// function comparable(a, b){
//   if(a > b){
//     return 1;
//   }else if(a < b){
//     return -1
//   }else{
//     return 0;
//   }
// }


//first solution
function union(arrays) {
  const allElements = [];
  const union = [];

  for(let array of arrays){
    for(let elm of array){
    	allElements.push(elm);
    }
  }

  for(let elm of allElements){
  	  if(!union.includes(elm)){
        union.push(elm);
      }
  }

  return union;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// //alternate solution
// function union(arrays) {
//   const resultArray = [];

//   for(let array of arrays){
//     for(let elm of array){
//       if(!resultArray.includes(elm)){
//         resultArray.push(elm);
//       }
//     }
//   }
//   return resultArray;
// }


// ADD CODE HERE
function objOfMatches(arr1, arr2, callback) {
  let obj = {};
  for(let i = 0; i < arr1.length; i++) {
     if(arr2[i] === callback(arr1[i])) {
  			obj[arr1[i]] = arr2[i];
     }
  }
  return obj;
}
// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


// ADD CODE HERE
function multiMap(array, callbacks){
  let map = {};

  //iterate through the array
  for(let elm of array){
  	const values = [];
  	//iterate through the callbacks
  	for(let callback of callbacks){
    	//add callback results to array
      values.push(callback(elm));
    }
    //add obj key is arr elms and value is value array.
    map[elm] = values;
  }
	//return the map
  return map;
}
// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// ADD CODE HERE
function majority(array, callback){
  let trueCounter = 0;
  let falseCounter = 0;

  for(let elm of array){
    if(calback(elm)){
      trueCounter++;
    }else{
      falseCounter++;
    }
  }

	if(trueCounter <= falseCounter){
    return false;
  }else{
    return true
  }
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


function prioritize(array, callback){
  const priority = [];
  const others = [];
  //iterating through array
  for(let elm of array){
  	//if true add it to priority
    //else add it to others
  	if(callback(elm)){
      priority.push(elm);
    }else{
      others.push(elm)
    }

  }
  return [...priority, ...others];
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


function countBy(array, callback){
  let result = {};

  //iterate through the array
  for(let elm of array){
  	//result key is return value of callback
  	//result value is count of particular return value
    const returnValue = callback(elm);
    if(result[returnValue]){
      result[returnValue]++;
    }else{
      result[returnValue] = 1;
    }
  }
  return result;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }


function groupBy(array, callback){
  let result = {};

  //iterating through the array
  for(let elm of array){
  	//result key is return value of callback
  	//result value is elms associated with callback return;
  	const key = callback(elm);
  	//if the key exist push the elm to the array
  	//else intilize a array with elm of callback
    if(result[key]){
      result[key].push(elm);
    }else{
      result[key] = [elm];
    }
  }
  //return result
  return result;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


function goodKeys(obj, callback){
  const result = [];
  //iterate through the obj
  for(let key in obj){
  	//callback on each value
  	//if callback return true push it result.
    if(callback(obj[key])){
      result.push(key);
    }
  }
  //return result
  return result;
}

// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
