/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    // array of digit logs
    const digLogs = [];
    // array of letter logs
    const letLogs = [];

    //get all the digit logs original order.
    for(let log of logs){
        if(isNaN(Number(log.split(' ')[1]))){
            letLogs.push(log);
        }else{
            digLogs.push(log);
        }
    }
    letLogs.sort(comparable)

    return [...letLogs, ...digLogs];
};

function comparable(x, y){
    a = x.slice(x.indexOf(' '));
    b = y.slice(y.indexOf(' '));
    if(a > b){
        return 1;
    }else if(a < b){
        return -1;
    }else{
        if(x > y){
            return 1;
        }else{
            return -1
        }
    }
}
// // sort letters perspectively
//    letters.sort((a,b) => {
//        let strA = a.substr(a.indexOf(' ') + 1);
//        let strB = b.substr(b.indexOf(' ') + 1);
//
//        if(strA === strB) return a.localeCompare(b);
//        return strA.localeCompare(strB);
//    });
