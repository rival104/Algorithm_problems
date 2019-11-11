function createFunctionWithInput(input){
  function printInput(){
    return input;
  }
  return printInput;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(X){
  function addX(num){
    return num + X;
  }
  return addX;
}

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5
// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));
// Now call addByTwo with an input of 2 and log the output

function once(callback){
  let called = false;
  let result;

  function executeOnce(input){
    if(!called){
      result = callback(input);
      called = true;
      return result;
    }else{
      return result;
    }
  }
  return executeOnce;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7

function after(callTimes, callback){
  let counter = 0;

  function executeAfter(...args){
    counter++;
    if(counter >= callTimes){
      return callback(...args);
    }
  }

  return executeAfter;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

function delay(callback, waitTime){
  function executeAfter(){
    setTimeout(callback, waitTime);
  }
  return executeAfter;
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

function saveOutput(callback, password){
  const args = {};

  function executeOutput(arg){
    if(arg !== password){
  		if(args[arg]) args[arg] = callback(arg);
      return args[arg];
    }else{
      return args;
    }
  }

  return executeOutput;
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }


function defineFirstArg(callback, firstArg){
  function executeCallback(...arg){
    return callback(firstArg, ...arg);
  }

  return executeCallback;
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15


function dateStamp(callback){
  const stampedOutput = {};

  function stampCallback(...args){
    const currentDay = new Date();
    stampedOutput.date = currentDay.toDateString();
    stampedOutput.output = callback(...args);

    return stampedOutput;
  }

  return stampCallback;
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }


function censor(){
  const stringPairs = {};

  function replaceString(...args){
    if(args.length === 2){
      stringPairs[args[0]] = args[1];
    }else{
      let words = args[0].split(' ');


      for(let i = 0; i < words.length; i++){
        // console.log(words[i]);
        const str = words[i].replace(/[a-zA-z]/, '');
        console.log(str);
        if(stringPairs[str]){
          words[i] = stringPairs[str];
        }
      }

      return words.join(' ');
    }
  }
  return replaceString;
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
// console.log(changeScene('The slow, brown fox jumps over the lazy cats.')); // should log: 'The quick, brown fox jumps over the lazy dogs.'
