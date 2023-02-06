var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};

// this is faster 0(n)


//slower 0(n^2)

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};