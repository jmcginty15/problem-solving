// add whatever parameters you deem necessary
function separatePositive(arr) {
    const negatives = [];
    const positives = [];
    for (let num of arr) {
        if (num < 0) negatives.push(num);
        else positives.push(num);
    }
    let i = 0;
    while (positives.length) {
        arr[i] = positives.pop();
        i++;
    }
    while (negatives.length) {
        arr[i] = negatives.pop();
        i++;
    }
    return arr;
}

module.exports = separatePositive;