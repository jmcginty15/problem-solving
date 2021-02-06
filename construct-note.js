// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (!letters.length) return false;
    const freqMap = {};
    for (let letter of letters) {
        if (freqMap[letter]) freqMap[letter] += 1;
        else freqMap[letter] = 1;
    }
    for (let letter of message) {
        if (!freqMap[letter]) return false;
        else freqMap[letter] -= 1;
    }
    return true;
}

module.exports = constructNote;