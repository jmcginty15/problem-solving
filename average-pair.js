// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    let left = 0;
    let right = arr.length - 1;
    while (right > left) {
        if (arr[left] > avg) return false;
        if (arr[right] < avg) return false;
        const pairAvg = (arr[left] + arr[right]) / 2;
        if (pairAvg === avg) return true;
        else if (pairAvg > avg) right--;
        else if (pairAvg < avg) left++;
    }
    return false;
}

module.exports = averagePair;