
/**
 * @param {string} s
 * @return {string}
 */

 /**
 * expand method
 */
var longestPalindrome = function(s) {
    let longest = s.substring(0,1);

    for(let i = 0; i < s.length; i++){
        if(!s || s.length === 1){
            return s;
        }
        //palindrome with odd center
        let expandedOdd = expand(s, i, i);
        //palindrome with even center
        let expandedEven = expand(s, i, i+1);

        let expanded = "";
        if(expandedEven.length > expandedOdd.length){
            expanded = expandedEven
        }else{
            expanded = expandedOdd;
        }

        if(expanded.length > longest.length){
            longest = expanded;
        }
    }

    return longest;
};

function expand(str, begin, end){
    while(begin >= 0 && end < str.length && str[begin] === str[end]){
        begin--;
        end++;
    }
    return str.substring(begin + 1, end);
}

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
