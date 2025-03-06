// Wrong answer
// export function rotate(nums: number[], k: number): void {
//     let nextIndex;
//     let curr = nums[0];
//     for(let x = 1; x <= nums.length; x++) {
//         nextIndex = (k*x)%nums.length;
//         let tmp = nums[nextIndex];
//         nums[nextIndex] = curr;
//         curr = tmp;
//     }
// };

// 1ms 64.68MB Using trinity rotation (rotation by 3 reversals)
export function rotate(nums: number[], k: number): void {
    k %= nums.length;
    // Reverse left side
    reverse(nums, 0, nums.length - 1);
    // Reverse right side (k size)
    reverse(nums, 0, k - 1);
    // Reverse all
    reverse(nums, k, nums.length -1);
};

function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
        let tmp = nums[start];
        nums[start] = nums[end];
        nums[end] = tmp;
        start++;
        end--;
    }
}
