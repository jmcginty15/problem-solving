// add whatever parameters you deem necessary
function isSubsequence(subStr, str) {
    if (subStr.length > str.length) return false;
    let newSubStr = '';
    let i = 0;
    let j = 0;
    while (i < str.length && j < subStr.length) {
        if (str[i] === subStr[j]) {
            newSubStr += str[i];
            j++;
        }
        i++;
    }
    return newSubStr === subStr;
}

module.exports = isSubsequence;