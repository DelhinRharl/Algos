var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
};


// ruby version

// def merge(nums1, m, nums2, n)
//     i, j, k = m - 1, n - 1, m + n - 1
//     while i >= 0 && j >= 0
//         if nums1[i] > nums2[j]
//             nums1[k] = nums1[i]
//             i -= 1
//         else
//             nums1[k] = nums2[j]
//             j -= 1
//         end
//         k -= 1
//     end
//     while j >= 0
//         nums1[k] = nums2[j]
//         j -= 1
//         k -= 1
//     end
//     return nums1
// end
