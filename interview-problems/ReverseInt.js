/**
 * @param {number} x
 * @return {number}
 */

//2nd solution
var reverse = function(x) {
    const intLimit = 2**31;
    let reversed = x.toString()
                    .split('')
                    .reverse()
                    .join('');

    let num = parseInt(reversed)

    if(num > intLimit || num <= -1 * intLimit){
        return 0;
    }

    return  num * Math.sign(x);
};

// //1st solution
// var reverse = function(x) {
//     let str = x.toString();
//     let reversed = '';

//     for(let char of str){
//         reversed = char + reversed;
//     }


//     let num = parseInt(reversed)

//     if(num > 2**31 || num <= -(2**31)){
//         return 0;
//     }

//     return  num * Math.sign(x);
// };
