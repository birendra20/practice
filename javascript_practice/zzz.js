let arr = [3, 4, 1, 9, 56, 7, 9, 12];
let m = 5;

let ans = Infinity;

arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i <= n - m; i++) {
  let min = arr[i];
  let max = arr[i + m - 1];
  let gap = max - min;

  if (gap < ans) {
    ans = gap;
  }
}
return ans;
