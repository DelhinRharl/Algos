const twoSum = (nums, target) => {

    // Create a map to store the values
    const map = new Map();
    
    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
    
        // Get the complement
        const complement = target - nums[i];
    
        // Check if the complement exists in the map
        if (map.has(complement)) {
    
        // Return the indices of the complement and the current value
        return [map.get(complement), i];
        }
    
        // Add the current value to the map
        map.set(nums[i], i);
    }
    };