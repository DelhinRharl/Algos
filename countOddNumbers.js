
const isOdd = (num) => num % 2 === 1;

const addCounts = (low, high) => {
    const bothOdd = isOdd(low) && isOdd(high);
    const oneOdd = isOdd(low) || isOdd(high);
    if (bothOdd) {
        return 2;
    } else if (oneOdd) {
        return 1;
    } else {
        return 0;
    }
}

var countOdds = function(low, high) {
    const diff = high - low;
    const counts = (diff + addCounts(low, high)) / 2;
    return counts;
};