// 2ms solution (my solution)
export function removeDuplicates(nums: number[]): number {
    let tmpSet = Array.from(new Set(nums));
    nums.splice(0,tmpSet.length,...tmpSet);
    return tmpSet.length;
};

// 0ms solution
// function removeDuplicates(nums: number[]): number {
//     let k = 0;
//     for (let i = 0; i < nums.length; i += 1) {
//         const curr = nums[i];
//         const next = nums[i + 1];
//         if (curr !== next) {
//             nums[k] = nums[i];
//             k += 1;
//         }
//     }
//     return k;
// };
