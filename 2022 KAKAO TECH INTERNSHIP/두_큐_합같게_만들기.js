function solution(queue1, queue2) {
  let sum = (arr) => arr.reduce((prev, cur) => prev + cur, 0);
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);
  let middle = (sum1 + sum2) / 2;
  let totalArr = queue1.concat(queue2);
  let start = 0,
    end = queue1.length;
  let count = 0;
  let len = totalArr.length;

  while (count <= 2 * len) {
    if (sum1 > middle) {
      sum1 -= totalArr[start];
      start = start < len - 1 ? start + 1 : 0;
    } else if (sum1 < middle) {
      sum1 += totalArr[end];
      end = end < len - 1 ? end + 1 : 0;
    } else {
      return count;
    }
    count++;
  }
  return -1;
}
