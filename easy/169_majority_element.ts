// 5ms 60.29MB
// export function majorityElement(nums: number[]): number {
//     nums.sort();
//     return nums[Math.floor(nums.length/2)];
// };

// 3ms 60.30MB
export function majorityElement(nums: number[]): number {
    let m = 0;
    let c = 0;
    for(let x of nums) {
        if (c === 0) {
            m = x;
            c = 1;
        } else if (m === x) {
            c++;
        }else {
            c--;
        }
    }
    return m;
};
