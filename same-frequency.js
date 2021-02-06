// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    const freqMap = new Map;
    for (let digit of str1) {
        if (freqMap[digit]) freqMap[digit] += 1;
        else freqMap[digit] = 1;
    }
    for (let digit of str2) {
        if (!freqMap[digit]) return false;
        else {
            freqMap[digit] -= 1;
            if (freqMap[digit] === 0) delete freqMap[digit];
        }
    }
    return freqMap.size === 0;
}

module.exports = sameFrequency;