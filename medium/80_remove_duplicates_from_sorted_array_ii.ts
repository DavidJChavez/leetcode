// 56ms 60.12mb
export function removeDuplicates(nums: number[]): number {
    let k = 0;
    let count = 1;
    for(let i = 1; i < nums.length; i++) {
        if (nums[k] === nums[i]) {
            if (count < 2) {
                k++;
                nums[k] = nums[i];
                count++;
            }
        } else {
            k++;
            nums[k] = nums[i];
            count = 1;
        }
    }
    return k+1;
};
