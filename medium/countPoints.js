var countPoints = function (points, queries) {
  let output = [];
  const queriesLength = queries.length;
  const pointsLength = points.length;

  for (let i = 0; i < queriesLength; i++) {
    let h = queries[i][0];
    let k = queries[i][1];
    let r = queries[i][2];
    output[i] = 0;
    for (let j = 0; j < pointsLength; j++) {
      let x = points[j][0];
      let y = points[j][1];
      if (Math.pow(x - h, 2) + Math.pow(y - k, 2) - Math.pow(r, 2) <= 0) {
        output[i] = output[i] + 1;
      }
    }
  }
  return output;
};

console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2],
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2],
    ]
  )
);
