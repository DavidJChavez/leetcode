// TLE
// export function numberOfSubstrings(s: string): number {
//   let count = 0;
//   for (let windowSize = 3; windowSize <= s.length; windowSize++) {
//     for (let i = 0; i + windowSize <= s.length; i++) {
//       let ss = s.substring(i, i + windowSize);
//       if (/^(?=.*a)(?=.*b)(?=.*c).*/.test(ss)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// TLE
// export function numberOfSubstrings(s: string): number {
//   let lPtr = 0;
//   let rPtr = 0;
//   let count = 0;
//   while (lPtr < s.length) {
//     const sub = s.substring(lPtr, rPtr + 1);
//     if (/^(?=.*a)(?=.*b)(?=.*c).*/.test(sub)) {
//       count += s.length - rPtr;
//       lPtr++;
//       rPtr = lPtr;
//     } else {
//       rPtr++;
//       if (rPtr === s.length) {
//         lPtr++;
//         rPtr = lPtr;
//       }
//     }
//   }
//   return count;
// }

// 39ms 65.39mb
export function numberOfSubstrings(s: string): number {
  let l = 0;
  let res = 0;
  let count = new Map<string, number>();

  for (let r of Array(s.length).keys()) {
    count.set(s[r], (count.get(s[r]) ?? 0) + 1);

    while (count.size === 3) {
      res += s.length - r;
      count.set(s[l], (count.get(s[l]) ?? 1) - 1);
      if (count.get(s[l]) === 0) {
        count.delete(s[l]);
      }
      l += 1;
    }
  }
  return res;
}

// export function numberOfSubstrings(s: string): number {
//   let l = 0;
//   let r = -1;
//   let arr = [0, 0, 0];
//   let count = 0;
//   while (r < s.length) {
//     if (arr[0] && arr[1] && arr[2]) {
//       count += s.length - r;
//       if (s[l] === "a") {
//         arr[0]--;
//       } else if (s[l] === "b") {
//         arr[1]--;
//       } else if (s[l] === "c") {
//         arr[2]--;
//       }
//       l++;
//     } else {
//       r++;
//       if (s[r] === "a") {
//         arr[0]++;
//       } else if (s[r] === "b") {
//         arr[1]++;
//       } else if (s[r] === "c") {
//         arr[2]++;
//       }
//     }
//   }
//   return count;
// }
