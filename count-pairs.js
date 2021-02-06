// add whatever parameters you deem necessary
function countPairs(arr, num) {
    const pairMap = {};
    let pairCount = 0;
    for (let val of arr) {
        if (pairMap[num - val] || (val === 0 && pairMap[num - val] === 0)) pairCount++;
        else pairMap[val] = num - val;
    }
    return pairCount;
}

module.exports = countPairs;
