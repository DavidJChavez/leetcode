// export function removeElement(nums: number[], val: number): number {
//     let index;
//     for (let i = 0; i < nums.length; i++) {
//         let n = nums[i];
//         if (n === val) {
//             continue;
//         }
//         index = nums.indexOf(val);
//         if (index === -1) {
//             break;
//         }
//         const tmp = nums[i];
//         nums[i] = nums[index];
//         nums[index] = tmp;
//     }
//     return index+1;
// };

export function removeElement(nums: number[], val: number): number {
    let tmp = nums.filter(v => v!==val);
    nums.splice(0, tmp.length, ...tmp);
    return tmp.length;
};
