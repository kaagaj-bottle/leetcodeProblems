var minOperations = function (boxes) {
  const boxLength = boxes.length;
  let output = [];
  for (let i = 0; i < boxLength; i++) {
    output[i] = 0;
    for (let j = 0; j < boxLength; j++) {
      if (i === j) {
        continue;
      }
      if (boxes[j] === "1") {
        output[i] = output[i] + Math.abs(i - j);
      }
    }
  }
  return output;
};

console.log(minOperations("110"));
