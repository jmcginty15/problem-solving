// add whatever parameters you deem necessary
function longestFall(arr) {
    let currentStreak = 0;
    let longestStreak = 0;
    let i = 0;
    while (i < arr.length) {
        if (i === 0 || arr[i] < arr[i - 1]) currentStreak++;
        else {
            if (currentStreak > longestStreak) longestStreak = currentStreak;
            currentStreak = 1;
        }
        i++;
    }
    if (currentStreak > longestStreak) longestStreak = currentStreak;
    return longestStreak;
}

module.exports = longestFall;