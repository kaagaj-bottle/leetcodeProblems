var getConcatenation = function (nums) {
  const loopLength = nums.length;
  console.log(loopLength);
  for (let i = 0; i < loopLength; i++) {
    nums[loopLength + i] = nums[i];
    console.log(loopLength + i);
  }
  return nums;
};

console.log(getConcatenation([1, 2, 1]));
