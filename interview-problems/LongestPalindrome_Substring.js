
/**
 * @param {string} s
 * @return {string}
 */
 //brute force method
var longestPalindrome = function(s) {
    let subStr = "";
    let result = "";
    for(let i = 0; i < s.length; i++){
        subStr = "";
        for(let j = i; j < s.length; j++){
            subStr += s[j];
            // console.log(subStr);
            if(isPalindrome(subStr)){
                if(subStr.length > result.length){
                    result = subStr;
                }
            }
        }
    }

    return result;
};

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
