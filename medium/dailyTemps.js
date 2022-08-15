var dailyTemperatures = function (temperatures) {
  const output = [];
  const tempLength = temperatures.length;
  for (let i = 0; i < tempLength; i++) {
    output[i] = 0;
    for (let j = i + 1; j < tempLength; j++) {
      if (temperatures[i] < temperatures[j]) {
        output[i] = Math.abs(j - i);
        break;
      }
    }
  }
  return output;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
