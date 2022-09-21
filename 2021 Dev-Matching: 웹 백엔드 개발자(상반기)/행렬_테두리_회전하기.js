function solution(rows, columns, queries) {
  let arr = Array.from(Array(rows + 1), () => new Array(columns + 1));
  let answer = [];

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      arr[i][j] = (i - 1) * columns + j;
    }
  }
  let temp = [];

  queries.forEach(([x1, y1, x2, y2]) => {
    for (let i = y1; i < y2; i++) temp.push(arr[x1][i]);
    for (let i = x1; i < x2; i++) temp.push(arr[i][y2]);
    for (let i = y2; i > y1; i--) temp.push(arr[x2][i]);
    for (let i = x2; i > x1; i--) temp.push(arr[i][y1]);

    answer.push(Math.min(...temp));

    for (let i = y1 + 1; i < y2 + 1; i++) arr[x1][i] = temp.shift();
    for (let i = x1 + 1; i < x2 + 1; i++) arr[i][y2] = temp.shift();
    for (let i = y2 - 1; i > y1 - 1; i--) arr[x2][i] = temp.shift();
    for (let i = x2 - 1; i > x1 - 1; i--) arr[i][y1] = temp.shift();
  });

  return answer;
}
