// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let num of arr) sumRight += num;
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) sumLeft += arr[i - 1];
        sumRight -= arr[i];
        if (sumLeft === sumRight) return i;
    }
    return -1;
}

module.exports = pivotIndex;